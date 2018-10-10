const express = require("express");
const app = express();

const videos = ["Car-driving.mp4", "Raindrops.mp4"];

app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const uniqid = require('uniqid')

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home/home.html");
});

app.get("/featured-videos", function(req, res) {
    res.send(videos);
});



app.get("/player", function(req, res) {
    res.sendFile(__dirname + "/public/player/player.html");
});

app.get("/upload", function(req, res) {
    res.sendFile(__dirname + "/public/upload/upload.html");
});

app.post("/upload", function(req, res) {
    if (req.files) {
        const video = req.files.uploadedFile;
        const fileExtension = video.name.substr(video.name.length - 4);
        if (fileExtension === ".mp4" || fileExtension === ".ogg") {
            video.mv(__dirname + "/public/videos/" + uniqid() + fileExtension, function(err) {
                if (err) {
                    console.log("Error Uploading file ", err);
                }
            })
        }
    }
    res.redirect("/");
});

const server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error running server on port ", server.address().port);
    } else {
        console.log("Server running on port", server.address().port);
    }
});