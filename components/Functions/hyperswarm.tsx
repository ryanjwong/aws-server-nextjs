const Hyperswarm = require('hyperswarm')
const DHT =  require('@hyperswarm/dht')

import { executeCodeRequest } from './execute'
interface hyperswarm {
    swarm: typeof Hyperswarm,
    id: string
}
/*
    JSON Format for swarm connections should be as
    {
        "data" : 
        {
            "type" : "message"/"code",
            "attributes" : {
                "body" : string
            },
            "id" : int

        }
    }
*/
async function init(key : string) : Promise<hyperswarm> {
    const swarm = new Hyperswarm({maxPeers : 1})
    
    swarm.on('connection', (conn : any, info : any) => {
        // swarm1 will receive server connections
        conn.write('This is a server connecting to you')
        conn.on('data', async (data:any) => {
            var json = JSON.parse(data.toString())
            if (json && json?.data) {
                const body = json.data.attributes.body
                if (json.data.type == 'message') {
                    console.log('Client Message:', body)
                }
                else if (json.data.type == 'code') {
                    var res = await executeCodeRequest(body)
                    conn.write((!res.success ? 'Code failed to execute ' : 'Code executed with output: ') + res.output + "In " + res.time + " ms.")
                }
            }
            else {
                conn.write('Invalid request, please follow proper API format')
            }
        })
        conn.on('error', async (error:any) => {
            conn.end()
            console.log('Connection to client closed unexpectedly. Attempting reconnection...')
            await swarm.listen()
        })
    })

    const topic = Buffer.alloc(32).fill(key) // A topic must be 32 bytes
    const discovery = swarm.join(topic, { server: true, client: false })
    await discovery.flushed() // Waits for the topic to be fully announced on the DHT

    return {swarm: swarm, id: key}
}

export { init }
export type { hyperswarm }
