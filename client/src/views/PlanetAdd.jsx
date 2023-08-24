import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AddPlanet from "../components/AddPlanet";
import Navbar from '../components/Navbar';

const PlanetAdd = () => {

    return (
        <div>
            <Navbar />
            <AddPlanet />
        </div>
    )
}

export default PlanetAdd
