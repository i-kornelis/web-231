/*
============================================
; Title: Exercise 4.3
; Author: Izabella Kornelis
; Date: 20 December 2019
; Description: A JavaScript program to demonstrate filtering with arrays.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 4.3"));

// new line
console.log("\n");

// start program

// variable declaration
var vehicles = [ "Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr,val){
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === val)
    console.log(arr[k]);
  }
}

// Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

// new line
console.log("\n");

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// new line
console.log("\n");

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Bus");

// end Program
