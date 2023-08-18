// server -> routes -> controller -> model
const Planet = require("../models/planet.model");

module.exports.APITest = (req, res) => {
    res.json({message:"ok"})
}

module.exports.allPlanet = (req, res) => {
    Planet.find()
        .then(planetList => res.json(planetList))
        .catch(err=>res.json(err))
}

module.exports.onePlanet = (req, res) => {
    Planet.findOne({_id: req.params.id})
        .then(onePlanet => res.json(onePlanet))
        .catch(err=>res.json(err))
}

module.exports.addPlanet = (req, res) => {
    Planet.create(req.body)
        .then(newPlanet=>res.json(newPlanet))
        .catch(err=>res.status(400).json(err))
}

module.exports.updatePlanet = (req, res) => {
    Planet.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then(updatedPlanet => res.json(updatedPlanet))
            .catch(err=>res.json(err))
}

module.exports.deletePlanet = (req, res) => {
    Planet.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err=>res.json(err))
}