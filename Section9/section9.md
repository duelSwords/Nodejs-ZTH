# Nasa Project


Can set env port inside the package.json
```
"start": "PORT=5000 node src/server.js"
```

## Models vs Controllers vs Routes
a router will always have a controller. Router is the endpoint. Controller is the request and response logic. 

Only 1 controller to a router
Can have many models to a controller
Can have 1 model to many controllers

## First way 
Using `cd` and `&&` command  
The `&&` run after the first command is completed
```
"server": "cd server && npm run watch",
"client": "cd client && npm start",
"watch": "npm run server & npm run client",
```

## Second Way
using the `--prefix` folder name, the folder to look into first
```
"server": "npm run watch --prefix server",
"client": "npm start --prefix client",
"watch": "npm run server & npm run client",
```

Run both the client and server use the `&` to run both side by side


## More example
```
  "scripts": {
    "server": "npm run watch --prefix server",
    "client": "npm start --prefix client",
    "watch": "npm run server & npm run client",
    "test": "nom run test --prefix server && npm run test --prefix client",
    "install-server": "npm install --prefix server",
    "install-client": "npm install --prefix client",
    "install": "npm run install-server && npm run install-client"
  },
  ```
