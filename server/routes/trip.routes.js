const Trips = require("../controllers/trip.controller");
const {authenticate} = require("../configs/middleware.config");

module.exports = (app) => {
    app.get("/api/travels/:id", Trips.getTravels);
}