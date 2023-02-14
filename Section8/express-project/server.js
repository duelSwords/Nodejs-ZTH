const express = require('express');
const app = express();
const PORT = 3000;

// app object => routeMethod get/post/delete, => path => requestHandler function the callback
app.get('/', (req, res) => {
  //Instead of node http end()
  res.send('Helllllloooooo');
});

app.get('/friends', (req, res) => {
  res.send({
    id: 1,
    name: 'Wayne',
  });
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Show me the way!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messagess....');
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}... YAY!!`);
});
