const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const setRoutes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

setRoutes(app)
app.use('/', express.static(__dirname + '/'));

server.listen(port, () => console.log(`Listening on port ${port}`));