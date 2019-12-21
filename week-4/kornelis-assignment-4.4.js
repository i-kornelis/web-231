/*
============================================
; Title: Assignment 4.4
; Author: Izabella Kornelis
; Date: 20 December 2019
; Description: A JavaScript program to demonstrate filtering with arrays.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 4.4"));

// new line
console.log("\n");

// start program

// variable declaration
var states = [ "Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// function returns true/false given the comparision
function getState(el, val) {
  if (el === val)
  return true;
}

// Output
console.log("-- ORIGINAL ARRAY --");
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}

console.log("\n"); // new line

console.log("-- SORTED ARRAY --");
states.sort().forEach(states => console.log(states));

console.log("\n");// new line

console.log(" -- SELECTED VALUE --");
console.log (
  states.filter (function (el) {
    return getState(el, "Iowa")
  }
  )[0]
);

// end Program




