// server -> routes -> controller -> model
const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({

    startDate: {
        type: String
    },
    strtPlanet: {
        type: String
    },
    endPlanet: {
        type: String
    },
    userId :{
        type: String
    },
    time: {
        type: Number
    },
    cost: {
        type: Number
    }

    
}, {timestamps: true});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;