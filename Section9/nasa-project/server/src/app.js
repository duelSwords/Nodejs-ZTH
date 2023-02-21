const express = require('express')
const app = express()

//Express middleware
app.use(express.json())


module.exports = app