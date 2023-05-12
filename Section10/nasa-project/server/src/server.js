// Use env port, else use default port
const PORT = process.env.PORT || 8000;

//Separating server from express
const app = require('./app');

const http = require('http');
const server = http.createServer(app);

// Initalize the data to get loaded
const { loadPlanetsData } = require('./models/planets.model');

async function startServer() {
  //Ensure data is loaded before server is booted up
  await loadPlanetsData();

  // Same as app.listen()
  server.listen(PORT, () => {
    console.log(`Listening on port ->>> ${PORT}...`);
  });
}

startServer();
