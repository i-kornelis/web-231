/*
============================================
; Title: Discussion 3.1
; Author: Jess Cruse
; Date: 13 Dec 2019
; Modified By: Izabella Kornelis
; Description: This program demonstrates the
; use of else if in JavaScript.  It had 2+
; errors which have been resolved.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 3.1 Resolved"));
// new line
console.log('\n')

//Start Program
var x = 2;
var y = 4;

//evaluating the relationship of the numbers
if (x == y) {
  console.log("x and y are the same"); //response of the numbers are the same
}
else if (x > y) {
  console.log(x + " is greater than " + y); //response if x is greater than y
}
else if (y > x) {
  console.log(y + " is greater than " + x);  //response if y is greater than x
}
else {
  console.log("So sorry! Something didn't go as expected.");  //error message if above logic isn't met
}


  //END Program
