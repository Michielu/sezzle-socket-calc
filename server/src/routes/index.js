const setHistoryRoutes = require("./history.js");





// module.exports = router;
const setRoutes = function (app) {
    setHistoryRoutes(app)
}

module.exports = setRoutes