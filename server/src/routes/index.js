const setHistoryRoutes = require("./history.js");

const setRoutes = function (app, io) {
    setHistoryRoutes(app, io)
}

module.exports = setRoutes