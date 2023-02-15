const friends = require('../models/friends.model')


function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
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
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}