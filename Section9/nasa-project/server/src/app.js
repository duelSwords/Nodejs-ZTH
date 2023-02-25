const express = require('express')
const app = express()
const planetsRouter = require('./routes/planets/planets.router')
const cors = require('cors')
const path = require('path')


//Express middleware
app.use(cors({
    // add options to whitelist clients
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(planetsRouter)

//Serve frontend client using the static middleware 
//Express can also now serve the frontend on 8000, 
app.use(express.static(path.join(__dirname, '..', 'public')))
//Add a safety landing on '/' route
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app