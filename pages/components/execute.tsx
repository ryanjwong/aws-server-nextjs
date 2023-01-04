import * as fs from 'fs'
import * as path from 'path'

interface executable {
    output : string,
    success : boolean
}

async function executeCodeRequest (data : string) : Promise<executable>{ 
    var output = ''
    var success = false
    var pathToFile = path.resolve('result.py')
    fs.writeFile(pathToFile,  data, err => {
        if (err) throw err
    })
 
    var spawn = require("child_process").spawn
    var process = spawn('python', [pathToFile])

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', (data : any) => {
        output += data.toString()
        success = true
    })

    process.stderr.on('data', (data : any) => {
        output += "error: " + data.toString()
    })

    process.on('close', (code : string) => {
        console.log(`child process exited with code ${code}`)
    })
    await sleep(300) // 3ms check timeout
    fs.unlink(pathToFile, (err) => {
        if (err) throw err //handle your error the way you want to;
        
    })
    if (success)  return {output: output, success: success}
    return {output: output, success: success}
}
function sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export type { executable }
export { executeCodeRequest }