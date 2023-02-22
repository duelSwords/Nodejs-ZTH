const express = require('express')
const app = express()
const planetsRouter = require('./routes/planets/planets.router')
const cors = require('cors')


//Express middleware
app.use(cors({
    // add options to whitelist clients
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(planetsRouter)


module.exports = app