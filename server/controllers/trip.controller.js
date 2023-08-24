// server -> routes -> controller -> model
const Trip = require("../models/trip.model");

module.exports.APITest = (req, res) => {
    res.json({message:"yay it works good job"})
}

module.exports.allTrips = (req, res) => {
    Trip.find()
        .then(tripList => res.json(tripList))
        .catch(err=>res.json(err))
}

module.exports.oneTrip = (req, res) => {
    Trip.findOne({_id: req.params.id})
        .then(oneTrip => res.json(oneTrip))
        .catch(err=>res.json(err))
}

module.exports.addTrip = (req, res) => {
    Trip.create(req.body.trip)
        .then(newTrip=>res.json(newTrip))
        .catch(err=>res.status(400).json(err))
}

module.exports.updateTrip = (req, res) => {
    Trip.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then(updatedTrip => res.json(updatedTrip))
            .catch(err=>res.json(err))
}

module.exports.deleteTrip = (req, res) => {
    Trip.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err=>res.json(err))
}