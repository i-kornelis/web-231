/*
============================================
; Title: Assignment 5.4
; Author: Izabella Kornelis
; Date: 07 January 2020
; Description: A broken JavaScript program to filter/reduce complex data structures.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 5.4"));
// new line
console.log('\n')

// start program

//object collection
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Anadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johnann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];



// return a new list of objects with only the rating field
let byRating = composers.map((x) => {
  return {lastName: x.lastName, rating: x.rating}
});

// output
console.log('-- COMPOSER BY RATING --')
byRatings.forEach((x) => {
  console.log("Rating:  + x.rating})
})
