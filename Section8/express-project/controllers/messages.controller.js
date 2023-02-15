//Use named function rather than arrow function. its better for debugging

function getMessages(req, res) {
  res.send('<ul><li>Show me the way!</li></ul>');
}

function postMessage(req, res) {
  console.log('Updating messagess....');
}

module.exports = {
    getMessages,
    postMessage
}