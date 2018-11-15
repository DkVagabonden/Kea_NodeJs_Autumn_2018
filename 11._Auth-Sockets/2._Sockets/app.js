const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connect', socket => {
    socket.on('send-color', data => {
        // emits to all the sockets
        io.emit("here's the color", data);

        // emits only to the specific socket
        //socket.emit("here's the color", data);
        
        // emits to all but the socket itself
        //socket.broadcast.emit("here's the color", data);
    })
})

server.listen(3000, (err) => {
    if (err) throw err;
    console.log("server is running on port 3000");
});