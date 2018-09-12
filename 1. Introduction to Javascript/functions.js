//console.log(multiplication(3, 9));

function multiplication(a, b) {
    return a * b;
}

// Function Exercise 1:
// Create an array that contains json objects of people
// go through it in your own function and return the first object that is named Brian

var people = [{"name": "Sophia"}, {"name": "Brian"}];

function findBrian(peopleArray) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].name === "Brian") {
            return peopleArray[i];
        }
    }
}

//console.log(findBrian(people));

var derission = function() {
    console.log("You suck!");
}

//derission();

var getName = function(person) {
    console.log("The name is: ", person.name);
};

function getMe(getName) {
    var me = {
        "name": "Anders",
        "age": 30 
    };
    getName(me);
}

getMe(getName);
//console.log(getMe().name);

