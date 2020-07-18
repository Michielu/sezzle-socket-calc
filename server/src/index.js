const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const setRoutes = require("./routes");
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

setRoutes(app, io)
app.use('/', express.static(__dirname + '/'));

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));