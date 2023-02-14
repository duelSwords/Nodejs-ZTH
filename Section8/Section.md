# Express API

Normally to run a script npm run [script-name]  
``` 
npm run start 
```

**Special naming**, instead of `index.js` use `server.js` when named server.js you don't need to write the script name `start` in `package.json` just running `npm run start` or `npm start` works. Since this naming is widely used to start the server

Using express `Content-Type` is automatically set depending on what is `res.send()` in.  Status Code is also automatical.  