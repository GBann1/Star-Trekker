import React, {useState} from 'react'

const PlanetAdd = () => {

    const [planet, setPlanet] = useState({
        planetName: "",
        rotationPeriod: 0,
        orbitalPeriod: 0,
        diameter: 0,
        climate: "",
        gravity: "",
        terrain: "",
        surfaceWater: 0,
        population: 0
    })
    
    const submitHandler = (e) => {
        e.preventDefault();


    }
    
    return (
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input type="text" />
        </form>
    )
}

export default PlanetAdd
