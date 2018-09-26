const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit-form", function(req, res) {
    console.log("body", req.body);
    //res.redirect("/");
    res.send("Everything went OK, status 200");
});

// Create an endpoint where the first part of the url is /get-info
// it should take the first name and last name dynamically
// and it should take a value called geo from query string
// put it in a JSON and return to the browser as JSON

// URL example: localhost:3000/get-info/Dennis/Petersen?geo=Danmark

app.get("/get-info/:firstname/:surname", function(req, res) {
    const person = {
        "geo": req.query.geo,
        "firstname": req.params.firstname,
        "surname": req.params.surname
    }

    res.json(person);
});


app.listen("3000", function(err) {
    if (err) {
        console.log("Error running the server", 3000)
    } else {
        console.log("Server running on port 3000");
    }
});