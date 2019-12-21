/*
============================================
; Title: Exercise 4.2
; Author: Izabella Kornelis
; Date: 20 December 2019
; Description: A JavaScript program using an array.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 4.2"));
// new line
console.log('\n')

// start program

// variable declaration

var fruits= ["Apple", "Mango", "Pear", "Banana", "Orange"];

// function
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++) {
    console.log(arr[k]);
  }
}

// output from the getFruits() function
getFruit(fruits);

// end program
