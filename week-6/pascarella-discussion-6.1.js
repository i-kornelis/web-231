
/*
================================================================
; Title: Discussion Board 6.1 - Objects and Built-In Objects
; Author: Pascal Pascarella
; Date: 17 January 2020
; Modified By: Izabella Kornelis
; Description: This program displays an error-filled object list.
=================================================================
*/

// Header
const header = require('../kornelis-header.js')

console.log(header.display("Izabella", "Kornelis", "Assignment 6.4"));
console.log("\n") // Line break


// Program Start

// Declare Variables
var name = "make";
var i = 0;
const truck = {           // Implements an incremental count for each obj iteration
    [name + ++i]: "Ford",
    [
      name + ++i]: "Chevrolet",
    [
    name + ++i]: "Toyota",
}

// Output
console.log(truck.make1); //"Ford"
console.log(truck.make2); //"Chevrolet"
console.log(truck.make3); //"Toyota"

// Program End
