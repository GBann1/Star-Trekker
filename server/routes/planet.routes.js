const PlanetController = require("../controllers/planet.controller")


module.exports = (app) => {
    app.get("/testing", PlanetController.APITest);
    app.get("/planets", PlanetController.allPlanet);
    app.get("/planets/:id", PlanetController.onePlanet);
    app.post("/planets/new", PlanetController.addPlanet);
    app.patch("/planets/:id/edit", PlanetController.updatePlanet);
    app.delete("/planets/:id", PlanetController.deletePlanet);
}