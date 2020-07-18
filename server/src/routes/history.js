const { HistoryService } = require('../services/index')

const setHistoryRoutes = function setHistoryRoutes(app, io) {
    app.get("/", (_, res) => {
        res.send({ response: "I am alive" }).status(200);
    });

    app.get("/h/previous", (_, res) => {
        const q = HistoryService.getQueue()
        res.send({ response: q }).status(200);
    });

    app.post("/h/add", (req, res) => {
        const calcExp = req.body.calcExpression
        HistoryService.addToQueue(calcExp)
        //Broadcast
        io.sockets.emit('FromAPI', calcExp);
        console.log(calcExp);
        res.send({ response: "Successfully added " + calcExp }).status(200);
    });

    app.get("/h/clear", (_, res) => {
        HistoryService.clearQueue()
        io.sockets.emit('FromAPI', "CLEAR");
        console.log("Clear history");
        res.send({ response: "success" }).status(200);
    });
}

module.exports = setHistoryRoutes