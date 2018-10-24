const express = require("express");
const app = express();


app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const ThumbnailGenerator = require("video-thumbnail-generator").default;

const uniqid = require('uniqid');


const MongoClient = require("mongodb").MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
let videoCollection;

MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(err, client) {
    const db = client.db("keatube");
    videoCollection = db.collection("videos");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home/home.html");
});

app.get("/featured-videos", function(req, res) {
    videoCollection.find().sort({"timpestamp": -1}).limit(30).toArray( ( err, featuredVideos ) => {
        res.send(featuredVideos);
    });
});


app.get("/player", function(req, res) {
    res.sendFile(__dirname + "/public/player/player.html");
});

app.get("/upload", function(req, res) {
    res.sendFile(__dirname + "/public/upload/upload.html");
});

app.post("/upload", function(req, res) {
    console.log("req body form: ", req.body);
    if (req.files) {
        const video = req.files.uploadedFile;
        const fileExtension = video.name.substr(video.name.length - 4);
        if (fileExtension === ".mp4" || fileExtension === ".ogg") {
            const fileName =  uniqid() + fileExtension;

            video.mv(__dirname + "/public/videos/" +  fileName, function(err) {
                if (err) {
                    console.log("Error Uploading file ", err);
                }

            const tg = new ThumbnailGenerator({
                sourcePath: __dirname + "/public/videos/" + fileName,
                thumbnailPath: __dirname + "/public/thumbnails"
            });

            tg.generateCb(function(err, result) {
                if (err) {
                    console.log("Thumbnail error: ", err);
                }
                const tags = req.body.tags.split(",").map(tag => tag.trim());
                const videoMetaData = {
                    "timedate": Date.now(),
                    "title": req.body.title,
                    "category": req.body.category,
                    "fileName": fileName,
                    "description": req.body.description,
                    "tags": tags,
                    "thumbnails": result
                };
                videoCollection.save(videoMetaData);
            });

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