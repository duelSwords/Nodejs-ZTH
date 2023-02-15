const express = require('express');
const app = express();
const PORT = 3000;
const friendsController = require('./controllers/friends.controller')
const messagesController = require('./controllers/messages.controller')

//Moved to models, hold data
// const friends = [
//   {
//     id: 0,
//     name: 'Wayne',
//   },
//   {
//     id: 1,
//     name: 'Clark',
//   },
// ];

///////////MIDDLEWARE /////////////////////
////////////////////////////////////////

//Custom middleware
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`Using a middleware >.<: ${req.method} ${req.url}`);
  next(); // Go to the next middleware
  //actions go here....
  //Upstream action, comes back to this middleware
  const delta = Date.now() - start;
  console.log(
    `Sending it upstream to response: ${req.method} ${req.url} ${delta}ms`
  );
});

//express.json() middleware
app.use(express.json());

////////METHOD ENDPOINTS ////////////////////
///////////////////////////////////////////

// app object => routeMethod get/post/delete, => path => requestHandler function the callback
app.get('/', (req, res) => {
  //Instead of node http end()
  res.send('Helllllloooooo');
});

// app.post('/friends', (req, res) => {
//   //The req is parsed using the express.json middleware

//   if(!req.body.name){
//     return res.status(400).json({
//       error: 'Missing friend name'
//     })
//   }

//   const newFriend = {
//     name: req.body.name,
//     id: friends.length,
//   };
//   friends.push(newFriend);

//   res.json(newFriend)
// });


// app.get('/friends', (req, res) => {
//   res.json(friends); //Instead of send() use json() to guarantee json object
// });

// GET /friends/22
// ____/:id the :id is the parametered route
// app.get('/friends/:friendId', (req, res) => {
//   //Convert myFriendId into a number
//   const myFriendId = +req.params.friendId;
//   // const myFriendId = Number(req.params.friendId)
//   const friend = friends[myFriendId];

//   if (friend) {
//     //Add status to explicitly state the status, default is 200 status
//     res.status(200).json(friend);
//   } else {
//     res.status(404).json({
//       error: 'Friend does not exitst',
//     });
//   }
// });

// app.get('/messages', (req, res) => {
//   res.send('<ul><li>Show me the way!</li></ul>');
// });

// app.post('/messages', (req, res) => {
//   console.log('Updating messagess....');
// });

//Using the import controller
app.post('/friends', friendsController.postFriend)
app.get('/friends', friendsController.getFriends)
app.get('/friends/:friendId', friendsController.getFriend)

app.get('/messages', messagesController.getMessages)
app.get('/messages', messagesController.postMessage)

//LISTEN TO THE SERVER
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}... YAY!!`);
});
