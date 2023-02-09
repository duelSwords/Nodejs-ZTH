const http = require("http");

// If use https webpage, need to use the https module
// Save into a variable 
const req = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    // console.log(`Data chunk: ${chunk}`);
    console.log(`Data chunk: `);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});

// Need to invoke end to send the request
req.end();



// can use destructing, 
const { get } = require("https");

// Instead of assigning a constant https.get, can just use the method 
get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    // console.log(`Data chunk: ${chunk}`);
    console.log(`Data chunk: `);
  });
  res.on("end", () => {
    console.log("No more data 2");
  });
});

//The get method doesn't require to invoke the end to send the request