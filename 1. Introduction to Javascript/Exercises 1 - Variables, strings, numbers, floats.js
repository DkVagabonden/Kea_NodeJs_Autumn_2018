//--------------------------------------
// Exercises 1 -  Variables, strings, numbers, floats
//--------------------------------------
//Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

var introduction = "My first name is" + firstName + "and my last name is" + lastName;

//console.log("My first name is", firstName, "and my last name is", lastName);
//console.log(introduction);

//--------------------------------------
//Exercise 2 - Numbers and Strings

var year = "2017";
var number = 1;

var result = number + parseInt(year);

var alternativeResult = +year + number;

var anotherResult = Number(year) + number;

//console.log(result);
//console.log(alternativeResult);
//console.log(anotherResult);


// Add the year plus the number
// The result should be 2018
// You cannot touch the given lines (line 1 or 2) this is true for the rest of the assignments

//--------------------------------------
//Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result with 2 decimals

var result = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(20);

//console.log(result);

//--------------------------------------
//Exercise 4 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var result = (one + two + three) / 3;
var fixedResult = result.toFixed(5);

//console.log(fixedResult);

//--------------------------------------
//Exercise 5 - Get the character by index

var letters = "abc"
// Get me the character "c"

var index = 2;

// console.log(letters[index]);

var result = letters.indexOf("c");

//console.log(result);

//--------------------------------------
//Exercise 6 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript


//fact = fact.replace("javascript", "Javascript");

var indexOfJ = fact.indexOf("j");
fact = fact.substr(0, indexOfJ) + fact.charAt(indexOfJ).toUpperCase() + fact.substr(indexOfJ+1, fact.length);

console.log(fact); 

//--------------------------------------
