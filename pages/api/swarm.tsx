import type { NextApiRequest, NextApiResponse } from 'next'
import { init } from '../../components/Functions/hyperswarm'
import type { hyperswarm } from '../../components/Functions/hyperswarm'
import { executeCodeRequest } from '../../components/Functions/execute'
/*
    TODO: Get Rid of Stack, Add map functionality, Create client interface
*/
var swarmStack: hyperswarm[] = []


// create a swarm based off the passed key and add it to the stack
async function swarm(key : string){
    const res = await init(key);
    swarmStack.push(res);
}

// send a message through the swarm's connection, if no connection is found return false, else return true
function send(msg: string, swarm : hyperswarm) : boolean {
    let connection
    if (swarm?.swarm.connections) {
        [connection] = swarm.swarm.connections
    }

    if (connection) {
        connection.write(msg)
        return true
    }
    return false
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query;
    const body = req.body
    if (req.method == 'POST' ) {

        if (query?.key) {
            const key = query.key.toString()
            await swarm(key)
            res.status(200).json({ message : "Swarm successfully created with id: " + key})
        }
        
        else if(query?.message && query?.id) {
            const message = query.message.toString()
            const key = query.id.toString()
            // find matching swarm with id in the stack of swarms
            const match = swarmStack.find((obj) => {
                return obj.id === key
            })
            // if theres no match send error code 500
            if (match && send(message, match)) {

                res.status(200).json({ message : "Message: " + message + " successfully sent."})
            }
            else {
                res.status(500).json({ error : "Error, message: '" + message + "' failed to send. No peer connections were found with id: " + key})
            }
        }
        else if(query?.code && query?.id) {
            const code = query.code.toString()
            const key = query.id.toString()
            // find matching swarm with id in the stack of swarms

            const match = swarmStack.find((obj) => {
                return obj.id === key
            })

            if (match) {
                const result = await executeCodeRequest(code)
                // code executed successfully
                if (result.success) {
                    // data was able to be sent through swarm
                    if (send(result.output, match)) {
                        res.status(200).json({ message : "Code: '" + code + "' successfully executed" + result.time + "ms. With response: " + result.output})
                    }
                    // matching peer was not found
                    else {
                        res.status(500).json({ message : "Code: '" + code + "' successfully executed in " + result.time + "ms. With response: " + result.output + ". Peer with id: " + key + " was unable to be found."})
                    }
                }
                // code failed to execute either bc syntax or timeout
                else {
                    res.status(500).json({ error : "Error, code: '" + code + "' failed to execute with error: " + result.output + " timed out after " + result.time + "ms."})
                }
            }
            // no peer was found
            else {
                res.status(500).json({ error : "Error, code: '" + code + "' failed to execute. No peer connections were found with id: " + key})
            }
        }
        else {
            res.status(400).json({ error : "Error, no params provided"})
        }
    }
    else {
        res.status(400).json({ error : "Error, request was not a POST method"})
    }
}