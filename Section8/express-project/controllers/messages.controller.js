const path = require('path');
// /folder/file.jpg    \folder\file.jpg

//Use named function rather than arrow function. its better for debugging

function getMessages(req, res) {
  //join all the paths
  // __dirname build-in variable of folder where current file lives
  // controllers folder, go up by 1 level to root, into public folder, images folder, file
  const pathway = path.join(__dirname, '..', 'public', 'images', 'cat.png')
  res.sendFile(pathway);
  // res.send('<ul><li>Show me the way!</li></ul>');
}

function getMessages2(req, res) {
  //render(hbs file, props objects)
  //SSR
  res.render('messages', {
    title: 'Messages to my friends',
    friends: 'John Smith'
  })
}

function postMessage(req, res) {
  console.log('Updating messagess....');
}

module.exports = {
  getMessages,
  postMessage,
  getMessages2
};
