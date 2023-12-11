const express = require('express')
const cluster = require('cluster')
const os = require('os')

const app = express()

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration){
        //event loop is blocked...
    }
}

app.get('/', (req, res) => {
    //Real world application of blocking function
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [5,3,2,4,1].sort()
    res.send(`Performance example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
    //this is a blocking function, can't continue until it finish running
    delay(4000)
    res.send(`Ding Beep Beep ${process.pid}`)
})


//Master process or worker process
// This block isn't need if using the pm2 tool, it takes care of creating workers for you
// if(cluster.isMaster){
//     console.log('master has been started')
//     const NUM_WORKERS = os.cpus().length
//     for(let i=0; i<NUM_WORKERS; i++){
//         console.log(`Core number ${i+1}`)
//         cluster.fork()//create a worker
//     }
// }else{
//     console.log('worker process started')
//     app.listen(3000)
// }


console.log('worker process started')
app.listen(3000)