const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    cookie: { secure: true }
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlEncoded({'extended': true}));
app.use(bodyParser.json());

const Model = require('objection').Model;
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig);

Model.knex(knex);

const db = {
    User: require('./models/User')
};



app.get('/forbidden', (req, res) => {
    if (req.session.isLoggedIn) {
        res.send("you are seeing forbidden content")
    }
    res.redirect('/');
});

const userRoutes = require('./routes/user');
userRoutes.userRoutes(app, db);

app.listen(3000, function(err) {
    if (err) throw err;

    console.log("the server is running!");
})