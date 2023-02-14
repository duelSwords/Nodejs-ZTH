const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Wayne',
  },
  {
    id: 1,
    name: 'Clark',
  },
];

// app object => routeMethod get/post/delete, => path => requestHandler function the callback
app.get('/', (req, res) => {
  //Instead of node http end()
  res.send('Helllllloooooo');
});

app.get('/friends', (req, res) => {
  res.json(friends); //Instead of send() use json() to guarantee json object
});

// GET /friends/22
// ____/:id the :id is the parametered route
app.get('/friends/:friendId', (req, res) => {
  //Convert myFriendId into a number
  const myFriendId = +req.params.friendId;
  // const myFriendId = Number(req.params.friendId)
  const friend = friends[myFriendId];

  if (friend) {
    //Add status to explicitly state the status, default is 200 status
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exitst',
    });
  }
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
