/*
============================================
; Title: Discussion 3.1
; Author: Christine Bohnet
; Date: 13 Dec 2019
; Modified By: Izabella Kornelis
; Description: It had 2+ errors which have been resolved.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 3.1 Resolved"));
// new line
console.log('\n')


const testArr = ['a', 'b', 'c', 'd'];
//display all
for (var x=0; x < testArr.length; x++){
    console.log(`Item ${x} in testArr is ${testArr[x]}`)
}
