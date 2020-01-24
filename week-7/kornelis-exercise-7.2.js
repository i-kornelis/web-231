/*
============================================
; Title: Exercise 7.2
; Author: Izabella Kornelis
; Date: 24 January 2020
; Description: A program to demonstrates working with constructor functions.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 7.2"));
// new line
console.log('\n')

// start program

// function
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// create 5 new objects
const employees = [
  new employee('1', 'Thomas', 'Edison', 'Software Engineer'),
  new employee('2', 'Benjamin', 'Franklin', 'Programmer'),
  new employee('3', 'Nikola', 'Tesla', 'Project Manager'),
  new employee('4', 'Charles', 'Babbage', 'Product Manager'),
  new employee('5', 'Alexander', 'Bell', 'Business Analyst')
];

// output
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(index + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' '+ employees[x].title)
  index++
};

// end program
