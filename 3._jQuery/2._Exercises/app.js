const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/LearningJqueryAssignment.html");
})

app.listen(3000, function(err) {
    if (err) {
        console.log("error running file ", err);
    } else {
        console.log("Server running on port 3000");
    }
});