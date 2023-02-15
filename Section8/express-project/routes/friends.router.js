const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

//Can even add middleware here
friendsRouter.use((req, res, next) => {
  console.log('ipaddress: ', req.ip);
  next() //Dont forget to add the next() for middleware
});

//Route relative path /friends
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
