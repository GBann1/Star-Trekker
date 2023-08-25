import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPlanet = () => {

    const [planet, setPlanet] = useState({
        name: "",
        mass: 0,
        radius: 0,
        period: 0,
        temperature: 0,
        distance_light_year: 0,
        semi_major_axis: 0,
        imageURL: "",
        angleA: 0,
        angleB: 0
        //coordinates: [x,y,z,r]
    })

    const nav = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/planets/new", { planet })
            .then(res => {
                // setPlanet.planetName("");
                // setPlanet.rotationPeriod("");
                // setPlanet.orbitalPeriod();
                // setPlanet.diameter();
                // setPlanet.className("");
                // setPlanet.gravity("");
                // setPlanet.terrain("");
                // setPlanet.surfaceWater();
                // setPlanet.population();
                // add distance from earth, dist coords, something 

                nav("/dashboard");
            })
    }

    const handleUpdate = (e) => {
        let { name, value } = e.target;
        setPlanet({
            ...planet,
            [name]: value
        });
    }


    return (
        <div>
            <h1 className='m-auto'>New Planet Information</h1>
            <form className="w-25 mx-auto" onSubmit={submitHandler}>
                <label className="form-label mt-4">Name:</label>
                <input className="form-control" type="text" name="name" value={planet.planetName} onChange={handleUpdate} />
                <label className="form-label mt-4">Mass:</label>
                <input className="form-control" type="number" name="mass" value={planet.rotationPeriod} onChange={handleUpdate} />
                <label className="form-label mt-4">Radius:</label>
                <input className="form-control" type="number" name="radius" value={planet.orbitalPeriod} onChange={handleUpdate} />
                <label className="form-label mt-4">Period:</label>
                <input className="form-control" type="number" name="period" value={planet.diameter} onChange={handleUpdate} />
                <label className="form-label mt-4">Temperature:</label>
                <input className="form-control" type="number" name="temperature" value={planet.climate} onChange={handleUpdate} />
                <label className="form-label mt-4">Distance: </label>
                <input className="form-control" type="number" name="distance_light_year" value={planet.gravity} onChange={handleUpdate} />
                <label className="form-label mt-4">Semi-Major Axis:</label>
                <input className="form-control" type="number" name="semi_major_axis" value={planet.terrain} onChange={handleUpdate} />
                <label className="form-label mt-4">Image URL: </label>
                <input className="form-control" type="text" name="imageURL" value={planet.surfaceWater} onChange={handleUpdate} />
                <label className="form-label mt-4">Angle A</label>
                <input className="form-control" type="number" name="angleA" value={planet.population} onChange={handleUpdate} />
                <label className="form-label mt-4">Angle A</label>
                <input className="form-control" type="number" name="angleB" value={planet.population} onChange={handleUpdate} />
                <input className="btn btn-primary mt-4" type="submit" value="Log Planet" />
            </form>
        </div>
    )
}

export default AddPlanet
