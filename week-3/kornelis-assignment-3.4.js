/*
============================================
; Title: Exercise 3.4
; Author: Izabella Kornelis
; Date: 11 December 2019
; Description: A simple JavaScript program to show how to utilize loops.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 3.4"));
// new line
console.log('\n')

// start program

// variables
var number1 = 6

// functions
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true;
  else
    return false;
}

function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!")
}

function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!")
}

/*
 Params: n/a
 Response: integer value
 Description: Returns a random integer value
Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Output
console.log("-- DO THE NUMBERS MATCH GAME --")

//for loop
for (let i = 0; i < 10; i++) {
  var number2 = randomNumber()
  if (match(number1, number2)) {
    logMatch(number1, number2);
  } else {
    logMismatch(number1, number2);
  }
}

// end program


