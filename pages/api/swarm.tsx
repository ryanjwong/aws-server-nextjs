import { connect } from 'http2';
import type { NextApiRequest, NextApiResponse } from 'next'
const Hyperswarm = require('hyperswarm')
const SecretStream = require('@hyperswarm/secret-stream')
const swarm1 = new Hyperswarm({maxPeers: 1})
var prevPeer: Buffer;
var connection: any;

swarm1.on('connection', (conn : any, info : any) => {
    // swarm1 will receive server connections
    conn.write('This is a server connecting to you');
    conn.on('data', (data:any) => console.log('Client Message:', data.toString()))
    connection = conn
});
    

async function swarm(key : string) {
    
    if (prevPeer != undefined) {
        await swarm1.leave(prevPeer)
        connection = undefined;
        prevPeer = Buffer.alloc(32).fill(key);
    }
    
    const topic = Buffer.alloc(32).fill(key) // A topic must be 32 bytes
    prevPeer = topic;
    const discovery = swarm1.join(topic, { server: true, client: false })
    await discovery.flushed() // Waits for the topic to be fully announced on the DHT
}

function send(msg: string) : boolean {
    if (connection != undefined) {
        connection.write(msg)
        return true
    }
    return false
}


export default function handler(req: NextApiRequest,
    res: NextApiResponse) {
    const url = new URL('http://localhost:3000' + req.url)
    if (req.method == 'POST' ) {
        if (url.searchParams.get('key')) {
            const key:string = url.searchParams.get('key')!;
            swarm(key);
            res.status(200).json({ message : "Hyperswarm with key: " + key + " successfully created."});
        }
        else if(url.searchParams.get('message')) {
            const message: string = url.searchParams.get('message')!;
            if (send(message)) {

                res.status(200).json({ message : "Message: " + message + " successfully sent."});
            }
            else {
            res.status(500 ).json({ error : "Error, message: '" + message + "' failed to send. No peer connections were found."});
            }
        }
        else {
            res.status(400).json({ error : "Error, no key provided"});
        }
    }
    else {
        res.status(400).json({ error : "Error, request was not a POST method"});
    }
}