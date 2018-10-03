const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

/*1. 
Customer: I want a website with a form where you can submit business cards
Developer colleague: Create two endpoints in the backend called /get-business-cards and /add-business-card
*/

let businessCards = [];
let initialCompany = {
    "company": "Client APS",
    "name": "Client",
    "position": "IT"
};
businessCards.push(initialCompany);


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/get-business-cards", function(req, res) {
    res.send(businessCards);
});

app.post("/add-business-card", function(req, res) {
    if (req.body.company && req.body.company.length > 0 
        && req.body.name && req.body.name.length > 0 
        && req.body.position && req.body.position.length > 0) {
            businessCards.push(req.body);
            res.status(200).send(req.body);        
        } else {
            res.status(400);
        }
});


app.listen(3000, function(err) {
    if (err) {
        console.log("Error running the server", 3000)
    } else {
        console.log("Server running on port 3000");
    }
});