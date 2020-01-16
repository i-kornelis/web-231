/*
============================================
; Title: Assignment 6.4
; Author: Izabella Kornelis
; Date: 15 January 2020
; Description: A program using nested objects.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 6.4"));
// new line
console.log('\n')

// start program

// object literal
var ticket = {
  id: "105",
  name: "Event",
  dateCreated: new Date(),
  priority: "high",

// nested object
  person: {
    id: "100",
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

// output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee "
+ ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

// end program

