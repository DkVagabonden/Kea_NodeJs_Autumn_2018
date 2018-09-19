const express = require("express");
const app = express();
const request = require("request");

app.get("/", function(req, res) {
    request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body); // Print the HTML for the Google homepage.
    });
});

app.get("/giveMeTheJson", function(req, res) {
    const carAsString = JSON.stringify({'manufacturer': 'Mazda', 'year': 2008});
    const carAsJson = JSON.parse(carAsString);
    res.json(carAsJson.year);
});

app.get("/car/:carName", function(req, res) {
    console.log(req.path);
    res.send("The request parameter is: " + req.params.carName 
    + " and the query string is: " + req.query.country);
});

app.listen(3000, function(err) {
    if (err) {
        console.log("Error running the server", err);
    } else {
        console.log("Server running on port 3000");
    }
})