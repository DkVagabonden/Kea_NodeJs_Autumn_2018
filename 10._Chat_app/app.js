const express = require('express');
const app = express();

const db = {};

const userRoutes = require('./routes/user');
userRoutes.userRoutes(app, db);

app.listen(3000, function(err) {pm
    if (err) throw err;

    console.log("the server is running!");
})