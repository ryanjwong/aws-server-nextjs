const Hyperswarm = require('hyperswarm')

const swarm1 = new Hyperswarm()

swarm1.on('connection', (conn : any, info : any) => {
    // swarm1 will receive server connections
    conn.write('this is a server connection');
    conn.end();
    conn.on('data', (data:any) => console.log('Client Message:', data.toString()))

});
    

async function swarm(key : string) {
    
    const topic = Buffer.alloc(32).fill(key) // A topic must be 32 bytes
    const discovery = swarm1.join(topic, { server: true, client: false })
    await discovery.flushed() // Waits for the topic to be fully announced on the DHT
}



export default function handler(req : Request, res : any) {

    const url = new URL('http://localhost:3000' + req.url)

    if (url.searchParams.get('key')) {
        const key:string = url.searchParams.get('key')!;
        swarm(key);
        res.status(200).json({ message : "Hyperswarm with key: " + key + " successfully created."});
    }
    else {
        res.status(400).json({ error : "Error, no key provided"});
    }
}