// STRICT MODE
// "use strict";

// hasDriverLisense = false;
// passTest = true;

// if (passTest) hasDriverLisense = true;
// console.log(hasDriverLisense);

// Function In Javacripts

// function logger() {
//   console.log("My name is stephen");
// }

// Function with parameters
// They are used for reusable code.
// Callback: Arguments

// Function Example
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apple and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declarations, Expressions and Arrow Functions

//Example Function Declarations
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// // callbacks
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expressions
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// //callbacks
// const age2 = calcAge2(1991);
// console.log(age2);

//ARROW FUNCTIONS
// Example 1
// const yearsUntilRetirement = (birthYear) => {
//   const age = 2027 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// // Callbacks
// const year = yearsUntilRetirement(2003);
// console.log(year);

// Example 2
// Arrow multiple parameters
// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// //Callbacks
// console.log(yearsUntilRetirement(1991, "John"));
// console.log(yearsUntilRetirement(1980, "Alice"));

// INTRODUCTION TO ARRAYS
// They are like BIG containers that you can throw variables into them and make references to them later

// Simple example

// const friend1 = "Alex";
// const friend2 = "Abdul";
// const friend3 = "Ben";

// // Array
// const friends = ["Alex", "Abdul", "Ben"];
// console.log(friends);
// console.log(friends[0]); // Alex
// console.log(friends[1]); // Abdul
// console.log(friends[2]); // Ben

// Example 2

// const firstName = "Jonas";
// const jonas = [firstName, "Shedrack", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// ARRAY METHODS IN JAVASCRIPTS
// 1. Push Method

// const friends = ["Alex", "Abdul", "Ben"];
// friends.push("Steve");
// console.log(friends);
// console.log(friends.length);

// // Unshift
// friends.unshift("John");
// console.log(friends);

// // Pop Method  // Remove the last element of an array
// friends.pop();
// console.log(friends);

// // Shift Method // Remove the first element in an array
// friends.shift();
// console.log(friends);

/// INTRODUCTION TO OBJECT IN JAVASCRIPTS
// Objects are data structure

// Difference beteween array and objects
// In array you can give an element a reference
// In objects you can define the value pairs and each values name

// Example of Objects
// const jonas = {
//   firstname: "Alex",
//   lastname: "Jonathan",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// DOT NOTATION
console.log(jonas.lastname);

// BRACKET NOTATION
console.log(jonas["lastname"]);

// Adding Method to objects
// const steve = {
//   firstname: "Abdul",
//   lastname: "Alex",
//   birthYeah: 1991,
//   job: "tailor",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLisense: true,

//   calcAge: function () {
//     return 2037 - this.birthYeah;
//   },
// };

// console.log(steve.calcAge());

// // this keyword - access an array or object

// LOOP IN JAVASCRIPTS
// CONTROL STRUCTURES
// ALLOW REPETITIVE TASK

// FOR LOOP
// for (let rep = 1; rep <=10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// Looping Through An Object Array

// const steve = {
//   firstname: "Abdul",
//   lastname: "Alex",
//   birthYeah: 1991,
//   job: "tailor",
//   friends: ["Michael", "Peter", "Steven"],
// };

// for (let i = 0; i < steve.friends.length; i++) {
//   console.log(`friends ${i + 1}: ${steve.friends[i]}`);
// }

// Looping Through Arrays, Breaking and Continuing

// const sarah = [
//   "jonas",
//   "John",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steve"],
// ];

// for (let i =0; i <sarah.length ; i++) {
//   console.log(sarah[i], typeof sarah[i]);
// }

// for (let i = 0; i < sarah.length; i++) {
//   if(typeof sarah[i] !== "string") continue;
//   console.log(sarah[i], typeof sarah[i]);
// }

// for (let i = 0; i < sarah.length; i++) {
//   if (typeof sarah[i] === "number") break;
//   console.log(sarah[i], typeof sarah[i]);
// }

// WHIPE LOOPS

// let rep = 11;
// while (rep <= 10) {
//   console.log(`while lifting weight repetition ${rep}`);
//   rep++;
// }
