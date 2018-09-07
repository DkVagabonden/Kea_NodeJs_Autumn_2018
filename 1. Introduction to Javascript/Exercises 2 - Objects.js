var myFirstObj = {"preference": "ice cream"};

myFirstObj.preference = "video games";
myFirstObj.pet = "cat";
delete myFirstObj.pet;
//console.log(myFirstObj);

//--------------------------------------
// Exercises 2 - Objects
//--------------------------------------
//Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
//console.log(myObj.message)


//--------------------------------------
//Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

var personObj = {
    "name": "Dennis",
    "age": 27
};

//console.log(personObj);

//--------------------------------------
//Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true

//stackOverflow.isAllowed = true;

//console.log(stackOverflow);

// nested jsonObject

stackOverflow.rule = {"isAllowed": true};

//console.log(stackOverflow.rule.isAllowed);

//--------------------------------------
//Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute";

// console.log(thisSong);

//--------------------------------------

var myFirstObj = {"preference": "ice cream"};

//console.log(myFirstObj.preference);

//console.log(myFirstObj["preference"]);
