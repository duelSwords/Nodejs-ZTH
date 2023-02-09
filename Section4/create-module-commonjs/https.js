const { send } = require('./request'); //look in current folder, don't need the extension because of require
const { read } = require('./response');

function request(url, data) {
  send(url, data);
  return read();
}

request('https://google.com', 'hello there')


// Required are cached 
// console.log(require.cache)
