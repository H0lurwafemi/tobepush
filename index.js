// let firstName = 10; // INteger
// console.log(firstName);
// let lastName = 9.87; // float
// let surName = "Abel"; // string

// let javaScript = TRUE; // Boolean

// let java;

// let emptyValue = NULL;

// //JAVASCRIPT IS DYNAMICALLY TYPED
// let javascriptIsFun = "Benjamin";
// console.log(typeof javascriptIsFun);

// // REASSIGNED
// javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// console.log(myAge);

// true;
// // Reassigning of values
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1990;
// // birthYear = 1991;
// console.log(birthYear);

// //OPERATORS IN JAVASCRIPT

// //Mathematical Operators

// const today = 2024;
// const abdul_age = today - 1990; // Subtraction operator
// console.log(abdul_age);

// const budget = 20000;
// const totalBudget = budget + 10000; // Addition Operator
// console.log(totalBudget);

// const lastYear = 30;
// const thisYear = lastYear * 20; // Multiplication Operator
// console.log(thisYear);

// // Concatenation
// // Concat
// firstName = "John";
// lastName = "Benjamin";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5; // Addition our answer is 15
// x += 10; // 25
// x *= 4; // 100
// x++; //increment operator 100 + 1 = 101
// x--; // decrement operator 101 - 1 = 100
// console.log(x);

// //Comparison Operators (give result in true or false)
// // < (less than)
// // > (greater than)
// // <= (less or equal)
// //>= (greater than or equal to)

// const age_1 = 20;
// const age_2 = 30;
// const full_age = age_1 < age_2;
// console.log(full_age);

// // Operator Precedence
// const now = 2027;
// const ageJonas = now - 1991;
// const ageAlex = now - 1992;
// console.log(now - 1991 > now - 1992); // TRUE STATEMENT

// let x, y;
// x = y = 25 - 10 - 5; //
// console.log(x, y);

/// CLASSWORK

/// STRINGS AND TEMPLETE LITERAL
// const firstName = "Alex";
// const job = "Programmer";
// birthYear = 1990;
// const year = 2024;

// const alexData = `My name is ${firstName} i am also a ${job} and i am ${
//   year - birthYear
// } years old`;
// console.log(alexData);

// TAKING DECISIONS IN JAVSCRIPTS
// 1. IF ELSE STAMEMENT

// Example (IF STATEMENT)
// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Alex is eligible to collect driver license");
// }

// USING THE IF ELSE STAMENT FOR CONDITION EXECUTION

// const age = 18;

// if (age >= 18) {
//     console.log('Sarah is eligible for a driver license')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`sarah is too young. wait for another ${yearsLeft} years`);
// }

// IF ELSE STATEMENT WITH MULTIPLE CONDITIONS

// const birthYear = 2001;
// let century;

// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// NESTED ELSE IF STATEMENTS

// const age = 18;
// const hasLicense = true;

// if (age >= 18) {
//   if (hasLicense) {
//     console.log("You can drive you already have a liceinse");
//   } else {
//     console.log("You re too old, but you ca get a license");
//   }
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`you are too young wait for another ${yearsLeft} years.`);
// }

/// IF STATEMENT WITH THE BOOLEAN EXPRESSIONS
// If else if statement
// const hasJob = true;
// const hasHouse = true;

// if(hasJob && hasHouse) {
//     console.log('you are well settled in life');
// } else if (hasJob || hasHouse) {
//     console.log("you are on right track");
// } else {
//     console.log('keep working hard')
// };

// const hasJob = true;
// const hasHouse = false;
// if(hasJob && hasHouse) {
//     console.log('you are well settled in life');
// } else if (hasJob || hasHouse) {
//     console.log("you are on right track");
// } else {
//     console.log('keep working hard')
// };

// TYPE CONVERSION AND TYPE COERSION IN JAVASCRIPT
// const alex = 1990;
// console.log(typeof alex);

// Converting string to a number
// const inputYear = "1991";
// const alexCode = 911;
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// converting numbers to strings
// console.log(String(alexCode));

// TYPE COERSION
// Type coersion with the + operator
// + operator convert number to string
// console.log("i am " + 23 + "years old");

//Type coersion with the - opertor
// - operator convert string to numbers
// console.log("23" - "10" - 3);

// Type coerson with the / operator
console.log("23" / "2");

// Truthly and Falsely values in javascript

//Falsly values
// 0,
// ''
// undefined
// null
// NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

//Truly values
// const money = 0; // false values
// if (money) {
//     console.log('dont spend it all')
// } else {
//     console.log('you should get a job')
// };

// Conditional statement with falsely values
// const money = 0; // false values
// if (money) {
//     console.log('dont spend it all')
// } else {
//     console.log('you should get a job')
// };

// Conditional statement with truthy values

// Stricts Equality Operator
// const age = 18;
// if (age === 18) {
//   console.log("you have become and adult");
// } else {
//   console.log("you have not become and adults");
// }

// console.log(18 === 18); //true
// console.log(18 === 19); // false
// console.log('18' === 18); // false

// Lose equality Operator ==
// const age1 = 18;
// if (age1 == '18') {
//     console.log('you just became and adults')
// };

// Using Equlity operaot in real senerios
// Example: Compare User Input

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

//INIQUILITY OPERATORS IN JAVASCRIPT

const favourite = Number(prompt("What is your favourite number?"));
if (favourite !== 23) {
  console.log("why not 23");
}

// LOGICAL OPERATORS\

// 1.  AND OPERATORS (&&)
const hasDriverLisense = false;
const hasGoodVision = false;
// console.log(hasDriverLisense && hasGoodVision);

if (hasDriverLisense && hasGoodVision) {
  console.log("you can see now");
} else {
  console.log("you cannot see now");
}

// 2. OR OPERATOR (||)

// SWITCH STATEMENT

const day = "wednesday";
switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekened");
    break;
  default:
    console.log("not a valid day!");
}

// IF ELSE

if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || "Thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || "sunday") {
  console.log("enjoy the weekened");
} else {
  console.log("not a valid day!");
}

// STAMEMENT AND EXPRESSION

3 + 4; // Expression 7
true && false; // false
1991; // 1991

// example of statement
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "jonas";
console.log(`i am ${2037 - 1991} years old ${me}`);

// TERNARY OPERATORS
// it is a short hand to write conditionals
// It has 3 conditions (the condition, the IF parts and the else part)

// The basic ternary operator

// const age = 13;
// age >= 18;  // consdition
// ? console.log('i like to drink wine');
// : console.log('i like to drink water');

// Example 1: Basic Ternary Operator
// const age = 17;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// Example 2 Ternary Operators with the if else statements
// const age = 20;
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18} ? "wine" : "water"`);
