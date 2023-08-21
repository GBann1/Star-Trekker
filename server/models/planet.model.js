// server -> routes -> controller -> model
const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mass: {
        type: Number
    },
    radius: {
        type: Number
    },
    period: {
        type: Number
    },
    temperature: {
        type: Number
    }, 
    distance_light_year:{
        type: Number
    }
}, {timestamps: true});

// This is what is creating the table
const Planet = mongoose.model('Planet', PlanetSchema);

// exporting the table, named 'Planet'
module.exports = Planet;