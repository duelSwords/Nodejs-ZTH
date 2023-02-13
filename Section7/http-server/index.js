const http = require('http');

const PORT = 3000;

// Create a new server, callback is the requestListener
/*
const server = http.createServer((req, res) => {
  //Both are req and res are streams, req (readStream), res(writeStream)
  //   res.writeHead(200, {
  //     'Content-Type': 'text/plain',
  //   });
  //   res.end('Hello I ended'); //Require an end() for each res

  //Passing in a JSON object type
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: 'Mr.Bob',
    })
  ); //Require an end() for each response
});
*/

/*
const server = http.createServer();
// Above is shorthand, for the requestListener
server.on('request', (req, res) => {
  //Adding to different response endpoinnts
  if (req.url === '/friends') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    //Another way of writing the writeHead
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        id: 1,
        name: 'Mr.Bob',
      })
    );
  } else if (req.url === '/messages') {
    res.setHeader('Content-Type', 'text/html')
    //Can write stright HTML in the response
    res.write('<ul>');
    res.write('<li>Hello From the HTML write response</li>');
    res.write('</ul>');
    res.end();
  } else {
    res.statusCode = 404
    res.end()
  }
});
*/

const server = http.createServer();
//Large data
const friends = [
  {
    id: 0,
    name: 'Mr.Bob',
  },
  {
    id: 1,
    name: 'Mr.Smith',
  },
  {
    id: 2,
    name: 'Mrs.Jane',
  },
];

server.on('request', (req, res) => {
  const items = req.url.split('/');
  // /friends/2 => ['', 'friends', '2']

  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const friend = data.toString(); //from a buffer to a string
      console.log(`Request: ${friend}`);
      friends.push(JSON.parse(friend)); //stringObject to Object, since the body from request is stringify 
    });
    req.pipe(res) //echo the request data back to the in the response
  } 
  
  else if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //When a parametered endpoint
    if (items.length === 3) {
      // +items[2] using the + convert string in number
      const friendIndex = Number(items[2]); //Need to be convert to a number
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } 
  
  else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<ul>');
    res.write('<li>Hello From the HTML write response</li>');
    res.write('</ul>');
    res.end();
  } 
  
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`I am listening on ${PORT} ...`);
}); //localhost, add which port to listen on
