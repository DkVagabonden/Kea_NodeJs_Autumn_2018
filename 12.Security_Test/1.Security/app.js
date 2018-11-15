const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

const https = require('https');

const fs = require('fs');

const options = {
    "key": fs.readFileSync(__dirname + "/localhost.key", 'utf8'),
    "cert": fs.readFileSync(__dirname + "/localhost.crt", 'utf8')
};

const server = https.createServer(options, app);

app.get('/', (req, res) => {
//    debugger;
    res.send("hello");
})


server.listen(3000, () => {
    console.log("Server is running");
});