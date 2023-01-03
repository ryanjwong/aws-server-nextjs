const Hyperswarm = require('hyperswarm')

interface hyperswarm {
    swarm: typeof Hyperswarm,
    id: string
}

async function init(key : string) : Promise<hyperswarm> {
    const swarm = new Hyperswarm({maxPeers: 1})
    
    swarm.on('connection', (conn : any, info : any) => {
        // swarm1 will receive server connections
        conn.write('This is a server connecting to you')
        conn.on('data', (data:any) => 
            console.log('Client Message:', data.toString())
        )
        conn.on('close', () => {
            console.log('Connection to peer closed')
          })
        conn.on('error', (error:any) => {
            conn.end()
            console.log('Connection to peer closed unexpectedly', error)
        })
    });

    const topic = Buffer.alloc(32).fill(key) // A topic must be 32 bytes
    const discovery = swarm.join(topic, { server: true, client: false })
    await discovery.flushed() // Waits for the topic to be fully announced on the DHT

    return {swarm: swarm, id: key}
}

export { init };
export type { hyperswarm };
