// const internals = require('./internals'); //Using the folder for the modules

// function request(url, data) {
//   internals.request.send(url, data);
//   return internals.response.read();
// }

// request('https://google.com', 'hello there')


// const { request, response } = require('./internals'); //Using the folder for the modules

// function requesting(url, data) {
//   request.send(url, data);
//   return response.read();
// }

// requesting('https://google.com', 'hello there');

///////////////////////////////////////////////////////////////////////////////

const { send, read } = require('./internals'); //Using the folder for the modules

function request(url, data) {
  send(url, data);
  return read();
}

request('https://google.com', 'hello there');
