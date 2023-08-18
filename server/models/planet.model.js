// server -> routes -> controller -> model
const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rotation_period: {
        type: Number
    },
    orbital_period: {
        type: Number
    },
    diameter: {
        type: Number
    },
    climate: {
        type: String
    },
    gravity: {
        type: String
    },
    terrian: {
        type: String
    },
    surface_water: {
        type: String
    },
    population: {
        type: Number
    }

}, {timestamps: true});

// This is what is creating the table
const Planet = mongoose.model('Planet', PlanetSchema);

// exporting the table, named 'Planet'
module.exports = Planet;