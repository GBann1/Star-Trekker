// server -> routes -> controller -> model
const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({

    startDate: {
        type: String
    },
    startPlanet: {
        type: String
    },
    destination: {
        type: String
    },
    time: {
        type: Number
    },
    cost: {
        type: Number
    },
    userId :{
        type: String
    }
}, {timestamps: true});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;