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

var server = app.listen(3000, function(err) {
    if (err) {
        console.log("Failed to start the server on port %d.", server.address().port);
    } else {
        console.log("Server is running on port %d.", server.address().port);
    }
});