const express = require('express')
const app = express()
const path = require('path')

const cors = require('cors')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')



//Express middleware
app.use(cors({
    // add options to whitelist clients
    origin: 'http://localhost:3000'
}))

//A logger middleware
app.use(morgan('combined'))

app.use(express.json())

//Serve frontend client using the static middleware 
//Express can also now serve the frontend on 8000, 
app.use(express.static(path.join(__dirname, '..', 'public')))

// app.use(planetsRouter)
// app.use(launchesRouter) 
app.use('/planets', planetsRouter) // Using a root pathway 
app.use('/launches', launchesRouter) // Using a root pathway 

//Add the routing for all the endpoints for the frontend side Reactjs
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


module.exports = app