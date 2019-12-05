/*
============================================
; Title: Exercise 2.3
; Author: Izabella Kornelis
; Date: 04 December 2019
; Description: A simple JavaScript program to show how to work with function properties.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 2.3"));

// start program

// function properties

myName.izabella = "Izabella";

// Function
function myName(){
  return myName.izabella;
}

// Output
console.log('\n')
console.log("Hello " + myName() + " Kornelis!");

// end program
