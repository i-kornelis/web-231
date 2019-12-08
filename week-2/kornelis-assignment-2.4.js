/*
============================================
; Title: Assignment 2.4
; Author: Izabella Kornelis
; Date: 07 December 2019
; Description: A simple JavaScript program to show how to build and invoke functions.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.4"));
// new line
console.log('\n')

// start program


//function to display full name
function fullName(first, last) {
  return first + last;
}

// Output
console.log ("Hello my name is " + fullName('Izabella ', 'Kornelis') + "!");
// new line
console.log('\n')

// Function to write date
function dateWriter(year, month, day){
  return month + day + ", " +year;
}

// Function to convert number to whole number
function formatNumber(number, numOfFixedPositions){
  number = 49.57;
  numOfFixedPositions = number.toFixed(0);
  return numOfFixedPositions;
}

// Output
console.log("Today's date is " + dateWriter('2019 ', 'December ', '7') + " and the current temperature is " + formatNumber() + " degrees.");
// new line
console.log('\n')

// Function to add x and y to equal my age
function convertToInt(x, y){
return x + y;
}

// Function to convert a string to a floating point number
function convertToFloat(amount){
  var amount = parseFloat(" 10000 dollars in my savings ");
  return amount;
}

// Output
console.log("I am " + convertToInt(12, 8) + " years old and my savings account goal is " + convertToFloat() + " dollars.");

// end program

