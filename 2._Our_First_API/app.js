var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// callback function
app.get("/path", function(req, res) {
    res.send("responsey pony");
});

app.get("/who_are_you", function(req, res) {
    var me = {"name": "Anders"};
    res.send(me);
});

app.get("/sendStatus", function(req, res) {
    res.sendStatus(404);
});

app.listen(3000);