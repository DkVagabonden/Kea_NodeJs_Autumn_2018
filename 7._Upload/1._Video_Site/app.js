const express = require("express");
const app = express();

const videos = ["Car-driving.mp4", "Raindrops.mp4"];

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/featured-videos", function(req, res) {
    res.send(videos);
});

// upload: remember to give id on server-side
// uniqid

// todo get video id from query string
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