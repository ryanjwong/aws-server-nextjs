import type { NextApiRequest, NextApiResponse } from 'next'
import {init} from './hyperswarm'
import type { hyperswarm } from './hyperswarm'
    

const Hyperswarm = require('hyperswarm')

var swarmStack: hyperswarm[] = []



async function swarm(key : string) {
    const res = await init(key);
    swarmStack.push(res);
}

function send(msg: string, swarm : hyperswarm) : boolean {
    let connection
    if (swarm?.swarm.connections) {
        [connection] = swarm?.swarm.connections
    }

    if (connection != undefined) {
        connection.write(msg)
        return true
    }
    return false
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query;
    if (req.method == 'POST' ) {
        if (query?.key && !query?.message) {
            const key = query.key.toString()
            await swarm(key)
            res.status(200).json({ message : "Hyperswarm with key: " + key + " successfully created."})
        }
        
        else if(query?.message && query?.key) {
            const message = query.message.toString()
            const key = query.key.toString()
            // find matching swarm in the stack of swarms
            const match = swarmStack.find((obj) => {
                return obj.id === key
            })
            
            if (match && send(message, match)) {

                res.status(200).json({ message : "Message: " + message + " successfully sent."})
            }
            else {
                res.status(500).json({ error : "Error, message: '" + message + "' failed to send. No peer connections were found with key: " + key})
            }
        }
        
        else {
            res.status(400).json({ error : "Error, no key provided"})
        }
    }
    else {
        res.status(400).json({ error : "Error, request was not a POST method"})
    }
}