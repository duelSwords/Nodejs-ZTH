// module.exports = {
//     request: require('./request'),
//     response: require('./response')
// }

///////////////////////////////////////////////////////////////////////////////

// const request = require('./request');
// const response = require('./response');

// // Can break it out 
// module.exports = {
//   send: request.send,
//   TIMEOUT: response.TIMEOUT,
//   read: response.read,
// };

// Also can use the spread operator instead writing out each individual properties
module.exports = {
    ...require('./request'),
    ...require('./response')
}
