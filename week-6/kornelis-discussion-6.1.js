/*
============================================
; Title: Discussion 6.1
; Author: Izabella Kornelis
; Date: 14 January 2020
; Description: A broken JavaScript program using object properties with at least (2) errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Discussion 6.1"));
// new line
console.log('\n')

// start program

// defines the pet object
var pet = {
  animal: "cat",
  breed: "Maine Coon",
  color: "orange",
  age: "2",
  name: {
    firstName: "Billy",
    lastName: "Catlin",
  }
};

var oldPet = {
  animal: "cat",
  breed: "American Shorthair",
  color: "black",
  age: "10",
  name: {
    firstName: "Cheaka",
    lastName: "Choo",
  }
}

// Output
// expected output "Billy is a orange Maine Coon who is 2."
console.log (pet.firstName + " is a " + pet.color + pet.breed + " who is " + pet.age + ".")

// expected output "Cheaka is a black American Shorthair who is 10."
console.log (pet.firstName + " is a " + pet.color + pet.breed + " who is " + pet.age + ".")

// end program
