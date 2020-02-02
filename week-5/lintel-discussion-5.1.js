/*
============================================
; Title:  lintel-exercise-5.1.js
; Author: Jeff Lintel
; Date:   9 January 2020
; Modified By: Izabella Kornelis
; Description: Display instrument name and
; skill level. There are 2 errors
;===========================================
*/

//header
const header = require('../kornelis-header.js');

console.log(header.display("Izabella", "Kornelis", "Assignment 5.1"));

//array holding instruments and skill levels
const instrumentArray = [
  {
    name: "Acoustic Guitar",
    type: "String",
    skillLevel: 4,
  },
  {
    name: "Xylophone",
    type: "Percussion",
    skillLevel: 2,
  },
  {
    name: "Trumpet",
    type: "Brass",
    skillLevel: 5,
  },
  {
    name: "Clarinet",
    type: "Woodwind",
    skillLevel: 5,
  },
  {
    name: "Tuba",
    type: "Brass",
    skillLevel: 1,
  },
];

//output
console.log("***Instrument List***");
instrumentArray.forEach((instrument) => {
  console.log(`${instrument.name} - Skill Level: ${instrument.skillLevel}`);
});
