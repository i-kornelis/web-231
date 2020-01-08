/*
============================================
; Title: Exercise 5.2
; Author: Izabella Kornelis
; Date: 07 January 2020
; Description: A JavaScript program showing a string array of five of my favorite foods.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 5.2"));
// new line
console.log('\n')

// start program

// variable declaration
var foods = ['Pad Thai','Yakisoba','Curry','Sushi','Jambalaya'];

//function to declare favorite foods
foods.forEach(function(food){
  console.log(food);
});

// end program
