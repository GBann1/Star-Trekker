const TripController = require("../controllers/trip.controller");

module.exports = (app) => {
    app.get("/trips/testing", TripController.APITest);
    app.get("/api/trips", TripController.allTrips);
    app.get("/api/trips/:id", TripController.oneTrip);
    app.post("/api/trips/new", TripController.addTrip);
    app.patch("/api/trips/:id/edit", TripController.updateTrip);
    app.delete("/api/trips/:id", TripController.deleteTrip);
}