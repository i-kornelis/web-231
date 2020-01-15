/*
============================================
; Title: Assignment 6.2
; Author: Izabella Kornelis
; Date: 14 January 2020
; Description: A program using try, catch, and finally block, to catch and display an error.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 6.2"));
// new line
console.log('\n')

// start program

try{
let x = 64;
let y =  10;
const sum = x / y;


if (sum !== y) throw 'NotSquared';

// output
console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err);
} finally {
  console.log('Finally clause reached...');
}
