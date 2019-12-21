
/*
============================================
; Title: Assignment 4.1
; Author: Clayton Stacy
; Date: 19 December 2019
; Modified By: Izabella Kornelis
; Description: Arrays discussion, find two errors
============================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js') // change to my header

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Discussion 4.1"));

// new line
console.log("\n");

// start program

// Declare the array teams with teams"
const teams = ["Steelers", "Cowboys", "Eagles", "Ravens", "Giants", "Browns"];

// Iterate through the array and sort them into divisions
teams.forEach(team => {
    if (team === "Browns" || team === "Steelers" || team === "Ravens") {
        //Log the AFC North teams using template literals
        console.log(`The ${ team } play in the AFC North`)
    } else {
        console.log(`The ${ team } play in the NFC East`)
    }
})

// end program
