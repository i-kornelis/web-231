/*
============================================
; Title: Exercise 3.3
; Author: Izabella Kornelis
; Date: 11 December 2019
; Description: A simple JavaScript program to show how to utilize control statements.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 3.3"));
// new line
console.log('\n')

// start program

// variables
let eventKeyCode = 13

// switch statement
switch (eventKeyCode){
  case 13:
    console.log("The enter key was pressed");
    break;
  case 16:
    console.log("The shift key was pressed");
    break;
  case 32:
    console.log("The spacebar key was pressed");
  case 8:
    console.log("The backspace / delete key was pressed");
    break;
  default:
    console.log("Unrecognized key")
}

// end program
