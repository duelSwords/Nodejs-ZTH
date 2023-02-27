# Nasa Project

Can set `env port` inside the package.json

```
"start": "PORT=5000 node src/server.js"
```

## Models vs Controllers vs Routes

a router will always have a controller. Router is the endpoint. Controller is the request and response logic.

Only 1 controller to a router
Can have many models to a controller
Can have 1 model to many controllers

## Using cd and &&

Using `cd` and `&&` command  
The `&&` run after the first command is completed

```
"server": "cd server && npm run watch",
"client": "cd client && npm start",
"watch": "npm run server & npm run client",
```

## Using --prefix [folder to look from]

using the `--prefix` folder name, the folder to look into first

```
"server": "npm run watch --prefix server",
"client": "npm start --prefix client",
"watch": "npm run server & npm run client",
```

Run both the `client and server` use the `&` to run both side by side instead of `&&`. 

## Running npm from another folder
To run an npm script from another directory, use --prefix:
```
npm run <command> --prefix <path> 
or
npm --prefix <path> run <command>
```

## Root Package.json

```
  "scripts": {
    "server": "npm run watch --prefix server",
    "client": "npm start --prefix client",
    "watch": "npm run server & npm run client",
    "test": "nom run test --prefix server && npm run test --prefix client",
    "install-server": "npm install --prefix server",
    "install-client": "npm install --prefix client",
    "install": "npm run install-server && npm run install-client"
    "deploy": "npm run build --prefix client && npm start --prefix server"
  },
```

## Redirect the build folder

set an env variable inside the `client` package.json, 

```
 "build": "BUILD_PATH=../server/public react-scripts build",
```
By adding a environment variable `BUILD_PATH=` like `PORT=` followed by the path, changing dir into the server/public folder to house the `build` folder.  
Now we have the frontend build in our server folder. 

## One commend to start both the server and client
The root `package.json`
Add the additonal to the script
```
"deploy": "npm run build --prefix client && npm start --prefix server"
``` 
In the `server folder` in the `app.js` add the static() middleware, to serve the frontend
```
app.use(express.static(path.join(__dirname, '..', 'public')))
```
Now when running `npm run deploy` it will build the frontend from the client folder and move it to the server folder. Now the both the frontend and backend is listening on the same server PORT. `Server` is also now serving the client optimized build folder using the static() middleware. 

## Middleware Morgan 
Use morgan middleware to log out request data and such.

## Endpoints 
When we have both the client build on the server. When looking at endpoint it will looks at the server endpoint routes. Not the client endpoint routes. To get it to look at the client routes as well add `/*` to the get request. Look at all routes after `/`. 
```
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
``` 