const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
});

// todo add req param id
app.get("/player", function(req, res) {
    res.sendFile(__dirname + "/public/player.html");
});


const server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error running server on port ", server.address().port);
    } else {
        console.log("Server running on port", server.address().port);
    }
});