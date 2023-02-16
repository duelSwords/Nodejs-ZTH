const express = require('express');
const app = express();
const path = require('path');


//set Express Template engine, using handlebars
app.set('view engine', 'hbs');
//set the views to the views folder
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;
// const friendsController = require('./controllers/friends.controller')
// const messagesController = require('./controllers/messages.controller')
// const friendsRouter = express.Router()
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

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
  console.log(
    `Using a middleware >.<: ${req.method}: ${req.baseUrl} ^^  ${req.url}`
  );
  next(); // Go to the next middleware
  //actions go here....
  //Upstream action, comes back to this middleware
  const delta = Date.now() - start;
  console.log(
    `Sending it upstream to response: ${req.method}: ${req.baseUrl} ^^ ${req.url} ${delta}ms`
  );
});

// Serve a webpage, without '/site' it be the root, else it localhost:3000/site
// Use the path, to get the absolute path from current file
const pathway = path.join(__dirname, 'public');
app.use('/site', express.static(pathway));

//express.json() middleware
app.use(express.json());

////////METHOD ENDPOINTS ////////////////////
///////////////////////////////////////////

// app object => routeMethod get/post/delete, => path => requestHandler function the callback
app.get('/', (req, res) => {
  //Instead of node http end()
  res.send('Helllllloooooo');
});

app.get('/hbs', (req, res) => {
  //Using HBS template, hbs file name, props objects
  //SSR
  res.render('index', {
    title: 'Are you my friend?',
    caption: 'Meow meooowwing'
  })
})

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
// friendsRouter.post('/friends', friendsController.postFriend)
// friendsRouter.get('/friends', friendsController.getFriends)
// friendsRouter.get('/friends/:friendId', friendsController.getFriend)

// friendsRouter.post('/', friendsController.postFriend)
// friendsRouter.get('/', friendsController.getFriends)
// friendsRouter.get('/:friendId', friendsController.getFriend)
app.use('/friends', friendsRouter); //The route relative path in the METHOD, express.Router()

// app.get('/messages', messagesController.getMessages)
// app.get('/messages', messagesController.postMessage)
app.use('/messages', messagesRouter); //The route relative path in the METHOD, express.Router()

//LISTEN TO THE SERVER
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}... YAY!!`);
});
