/*
============================================
; Title: Exercise 3.2
; Author: Izabella Kornelis
; Date: 11 December 2019
; Description: A simple JavaScript program to show how to utilize pattern matching functions for logical error handling.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 3.2"));
// new line
console.log('\n')

// start program

// Variables
var testVar1= "Truck";
var testVar2= "Car";
var testVar3= "Bike";
var testVar4= "Bike";
var testVar5= "Four";
var testVar6= "Three";


// function
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

// output from the match() function
console.log(match("A", "B"));
console.log(match(2, 2));

// Conditional "if...else" statements. For all six variables
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}

// end program
