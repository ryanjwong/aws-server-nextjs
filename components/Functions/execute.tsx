import * as fs from 'fs'
import * as path from 'path'

interface executable {
    output : string,
    success : boolean,
    time : number
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
        output += "Error: " + data.toString()
        success = false
    })

    process.on('close', (code : string) => {
        console.log(`child process exited with code ${code}`)
    })

    function status() : boolean {
        return success
    }

    const time = await sleepUntil(status, 3000) // 3000ms check timeout
    fs.unlink(pathToFile, (err) => {
        if (err) console.log('this is really bad fuck')
    })

    return {output: output, success: success, time: time}
}

// wait until the code successfully runs or timeout after 3 secs
async function sleepUntil(f: () => boolean, timeoutMs: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const timeWas = new Date();
      const wait = setInterval(function() {
        if (f()) {
          console.log(`executed after ${new Date().valueOf() - timeWas.valueOf()} ms`);
          clearInterval(wait);
          resolve(new Date().valueOf() - timeWas.valueOf());
        } else if (new Date().valueOf() - timeWas.valueOf() > timeoutMs) { // Timeout
          console.log(`timed out after ${new Date().valueOf() - timeWas.valueOf()} ms`);
          clearInterval(wait);
          resolve(new Date().valueOf() - timeWas.valueOf());
        }
      }, 20);
    });
  }
  
export type { executable }
export { executeCodeRequest }