const express = require('express')

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
    res.send('Performance example')
})

app.get('/timer', (req, res) => {
    //this is a blocking function, can't continue until it finish running
    delay(9000)
    res.send('Ding Ding Ding')
})

app.listen(3000)