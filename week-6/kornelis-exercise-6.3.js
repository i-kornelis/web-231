/*
============================================
; Title:  Exercise 6.3
; Author: Izabella Kornelis
; Date: 15 January 2020
; Description: A program using get and set methods for objects.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", " Exercise 6.3"));
// new line
console.log('\n')

// start program

// ticketing system object
let ticketingSystem = {
  id: "101",
  name: "Help Desk Support",
  requester: "Bob Jones"
};

// output to a single line
console.log( "{id: " + ticketingSystem.id + ", name: " + ticketingSystem.name + ", requester: " + ticketingSystem.requester + "}")


// end program
