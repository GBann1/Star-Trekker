const Trips = require("../controllers/model.controller");
const {authenticate} = require("../configs/middleware.config");

module.exports = (app) => {
    app.get("/api/travels/:id", Users.getTravels);
}