// const mission = 'learn'
const mission = process.argv[2]

if(mission === 'learn'){
    console.log('Time to write some Node Code')
}else{
    console.log(`Is ${mission} really more fun`)
}

// typing in "node" in terminal runs the REPL 
// node [file.js] runs the file
// node runtime, has a build in property call "global", just like the browser node has a property call window 
// run node > type in "global" has a property "process" 
// global.process  --> we can down global and just type in "process" 

// process.argv --> string[] --> 1st element process.execPath, 2nd, path to js file, 3th is additonal args
// [0]   [1]               [2]
// node Section2/hello.js food 
