const express = require("express");
const http = require("http");

const port = process.env.PORT || 4000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));