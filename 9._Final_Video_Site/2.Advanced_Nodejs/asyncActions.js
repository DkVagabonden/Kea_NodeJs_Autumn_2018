const fs = require("fs");

// read and console.log from file
// are there several methods? which did you choose and why

fs.readFile("data.txt", "utf8", function(err, data) {
    //console.log(data);
});

// A promise can be in 3 different states, pending, accepted or rejected
// a promise is a wrapper for callbacks
new Promise((resolve, reject) => {
    console.log("Entered the promise");
    setTimeout(() => {
       resolve("The promise resolved after 3 seconds"); 
    }, 3000);
}).then(data => {
    console.log(data);
});

function resolvesAfter5Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The promise resolved after 5 seconds"); 
        }, 5000);
    });
}

// async - await

async function asyncAwaitTest() {
    const resolvedData = await resolvesAfter5Seconds();
    console.log(resolvedData);
}

asyncAwaitTest();