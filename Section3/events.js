const EventEmitter = require("events");

//The subject
const celebrity = new EventEmitter();

//Subscribe to celebrity for Observer 1
// a event name, callback listener function
celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

//Subscribe to celebrity for Observer 2
celebrity.on("race win", () => {
  console.log("Booo, I could have done better!");
});

//Subscribe to celebrity for Observer 3
celebrity.on("race", (result) => {
  if (result === "lose") {
    console.log("Nooo, You can't lose!!");
  }
});

//The process is an instant of EventEmitter
//Runs when the program finish running
process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

//The subject emits events
celebrity.emit("race win");
celebrity.emit("race", "lose");
celebrity.emit("race win");

/**
Congratulations! You are the best!
Booo, I could have done better!
Nooo, You can't lose!!
Congratulations! You are the best!
Booo, I could have done better!
Process exit event with code:  0
 */
