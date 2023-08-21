const PlanetController = require("../controllers/planet.controller")


module.exports = (app) => {
    app.get("/testing", PlanetController.APITest);
    app.get("/api/planets", PlanetController.allPlanets);
    app.get("/api/planets/:id", PlanetController.onePlanet);
    app.post("/api/planets/new", PlanetController.addPlanet);
    app.patch("/api/planets/:id/edit", PlanetController.updatePlanet);
    app.delete("/api/planets/:id", PlanetController.deletePlanet);
}