# Node Package Manager

## module vs package 
- module is a file
- package is a collection of modules

Get started to install packages `npm init`  
Adding `npm init -y` will yes to all the default questions  

Adding new command to script inside `package.json`  
To run said script `npm run ___`  name  

When you have a `package.json` a script, its a package. However when we think of package it means its reusable and sharable for the community. 

Using `npm install` command to recreate the node_modules folder from exisiting package  

## Semantic Versioning 
- MAJOR.MINOR.PATCH 
- v1.0.0    

### Reading dependency 
Version `"axios": "^1.3.2"`   
the `^` will update to any minor version updates,  
the `~` will update the patch versions     
https://semver.npmjs.com/  

The `package-lock.json` helps insure thats all machines has the same package version. 

To fix vulnerability with `npm audit fix` if there is an available update.  

### Nodemon
Nodemon is a executable, `/bin/` locally found in `node_modules/nodemon/bin/nodemon`   
Automatically refresh when change is made `npm i nodemon`  
To uninstall locally `npm uninstall nodemon`   
To make it globally available `npm i -g nodemon`  
Globally is installed in your `.nvm` folder `~/.nvm/versions/node/v14.21.2/lib/node_modules/nodemon/bin/nodemon.js`    
