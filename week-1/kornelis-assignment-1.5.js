/*
============================================
; Title: Assignment 1.5
; Author: Izabella Kornelis
; Date: 29 November 2019
; Modified By: Izabella Kornelis
; Description: A simple JavaScript program to introduce to work with creating multiple variables for 3 employee records.
;===========================================
*/

//start program

//variable declaration

//Employee Record #1
var firstName1 = "Bob";
var lastName1 = "Jones";
var address1 = "2040 Maple Ave.";
var payRate1 = 18.66; 
var hireDate1 = new Date(2010, 3, 15);

//Employee Record #2
var firstName2 = "JoAnna";
var lastName2 = "Alexander";
var address2 = "3250 Chestnut St.";
var payRate2 = 20.45; 
var hireDate2 = new Date(2009,2,20);

//Employee Record #3
var firstName3 = "Mary";
var lastName3 = "Sue";
var address3 = "2121 Almond Ln.";
var payRate3 = 12.50; 
var hireDate3 = new Date(2019,7,11);


//output
console.log('First Name: ' + firstName1);
console.log('Last Name: ' + lastName1);
console.log('Address ' + address1);
console.log('Pay Rate: ' + payRate1.toFixed(1)); //rounds payRate to one decimal place
console.log('Hire Date: ' + hireDate1.toLocaleDateString()); //formats date with slashes

console.log('First Name: ' + firstName2);
console.log('Last Name: ' + lastName2);
console.log('Address ' + address2);
console.log('Pay Rate: ' + payRate2.toFixed(1)); //rounds payRate to one decimal place
console.log('Hire Date: ' + hireDate2.toLocaleDateString()); //formats date with slashes

console.log('First Name: ' + firstName3);
console.log('Last Name: ' + lastName3);
console.log('Address ' + address3);
console.log('Pay Rate: ' + payRate3.toFixed(1)); //rounds payRate to one decimal place
console.log('Hire Date: ' + hireDate3.toLocaleDateString()); //formats date with slashes

//end program