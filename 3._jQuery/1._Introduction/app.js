var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(err) {
    if (err) {
        console.log("failed to start the server");
    } else {
        console.log("server started on port 3000")
    }
});