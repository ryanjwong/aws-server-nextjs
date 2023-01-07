const Hyperswarm = require('hyperswarm')
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
            "id" : int
            "attributes" : {
                "language" : "python/node/c++/etc"
                "code" : "any"
            }
        }
    }
*/
async function init(key : string) : Promise<hyperswarm> {
    const swarm = new Hyperswarm()
    
    swarm.on('connection', (conn : any, info : any) => {
        // swarm1 will receive server connections
        conn.write('This is a server connecting to you')
        conn.on('data', async (data:any) => {
            console.log('Client Message:', data.toString())
            var json = JSON.parse(data.toString())
            if (json?.code) {
                var res = await executeCodeRequest(json.code)
                conn.write((!res.success ? 'Code failed to execute ' : '') + res.output)
            }
        })
        conn.on('close', () => {
            console.log('Connection to peer closed')
        })
        conn.on('error', (error:any) => {
            conn.end()
            console.log('Connection to peer closed unexpectedly', error)
        })
    })

    const topic = Buffer.alloc(32).fill(key) // A topic must be 32 bytes
    const discovery = swarm.join(topic, { server: true, client: false })
    await discovery.flushed() // Waits for the topic to be fully announced on the DHT

    return {swarm: swarm, id: key}
}

export { init }
export type { hyperswarm }
