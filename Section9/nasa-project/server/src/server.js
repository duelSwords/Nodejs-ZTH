// Use env port, else use default port
const PORT = process.env.PORT || 8000

//Separating server from express
const app = require('./app')

const http = require('http')
const server = http.createServer(app)

// Same as app.listen() 
server.listen(PORT, () => {
    console.log(`Listening on port ->>> ${PORT}...`)
})

