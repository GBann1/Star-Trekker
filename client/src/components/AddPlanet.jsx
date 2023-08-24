import React, {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddPlanet = () => {
    const [planet, setPlanet] = useState({
        planetName: "",
        rotationPeriod: "",
        orbitalPeriod: 0,
        diameter: 0,
        climate: "",
        gravity: "",
        terrain: "",
        surfaceWater: 0,
        population: 0
        //coordinates: [x,y,z,r]
    })

    const nav = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/planets", {planet})
            .then(res => {
                setPlanet.planetName("");
                setPlanet.rotationPeriod("");
                setPlanet.orbitalPeriod();
                setPlanet.diameter();
                setPlanet.className("");
                setPlanet.gravity("");
                setPlanet.terrain("");
                setPlanet.surfaceWater();
                setPlanet.population();
                // add distance from earth, dist coords, something 

                nav("/");
            })
    }

    return (
        <div>
            <h1 className='m-auto'>New Planet Information</h1>
            {/* <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" value={planet.planetName} onChange={setPlanet.planetName(e.target.value)}/>
                <label>Rotation period:</label>
                <input type="text" value={planet.rotationPeriod} onChange={setPlanet.rotationPeriod(e.target.value)}/>
                <label>Orbital Period:</label>
                <input type="number" value={planet.orbitalPeriod} onChange={setPlanet.orbitalPeriod(e.target.value)}/>
                <label>Diameter:</label>
                <input type="number" value={planet.diameter} onChange={setPlanet.diameter(e.target.value)}/>
                <label>Climate:</label>
                <input type="text" value={planet.climate} onChange={setPlanet.className(e.target.value)}/>
                <label>Gravity</label>
                <input type="text" value={planet.gravity} onChange={setPlanet.gravity(e.target.value)}/>
                <label>Terrain:</label>
                <input type="text" value={planet.terrain} onChange={setPlanet.terrain(e.target.value)}/>
                <label>Surface Water:</label>
                <input type="number" value={planet.surfaceWater} onChange={setPlanet.surfaceWater(e.target.value)}/>
                <label>Population</label>
                <input type="number" value={planet.population} onChange={setPlanet.population(e.target.value)}/>
                <input type="submit" value="Log Planet"/>
            </form> */}
        </div>
    )
}

export default AddPlanet
