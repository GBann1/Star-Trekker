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
        <div >
            <div className='text-center'>
                <p className='fs-4'>All measurements are in relation to Earth; (e.g., a value of 1.5 = 1.5x larger than Earth)</p>
            </div>
            <form className="p-3 d-flex" style={{justifyContent:'center'}} onSubmit={submitHandler}>
                <div style={{width:'20%', marginRight:'1%'}}>
                    <label className="form-label mt-4">Name:</label>
                    <input className="form-control" type="text" name="name" placeholder='Planet' value={planet.planetName} onChange={handleUpdate} />
                    <label className="form-label mt-4">Mass:</label>
                    <input className="form-control" type="number" name="mass" step='0.00001' placeholder='(0.4-100)' value={planet.rotationPeriod} onChange={handleUpdate} />
                    <label className="form-label mt-4">Radius:</label>
                    <input className="form-control" type="number" name="radius" step='0.00001' placeholder='(0.0002-100)' value={planet.orbitalPeriod} onChange={handleUpdate} />
                    <label className="form-label mt-4">Period:</label>
                    <input className="form-control" type="number" name="period" step='0.00001' placeholder='(0-100)' value={planet.diameter} onChange={handleUpdate} />
                    <label className="form-label mt-4">Temperature (°F):</label>
                    <input className="form-control" type="number" name="temperature" step='0.00001' placeholder='(35)' value={planet.climate} onChange={handleUpdate} />
                </div>
                <div style={{width:'20%', marginLeft:'1%'}}>
                    <label className="form-label mt-4">Distance (lightyears): </label>
                    <input className="form-control" type="number" name="distance_light_year" step='0.00001' placeholder='(0-5)' value={planet.gravity} onChange={handleUpdate} />
                    <label className="form-label mt-4">Semi-Major Axis:</label>
                    <input className="form-control" type="number" name="semi_major_axis" step='0.00001' placeholder='(0.8-1.2)' value={planet.terrain} onChange={handleUpdate} />
                    <label className="form-label mt-4">Image URL: </label>
                    <input className="form-control" type="text" name="imageURL" placeholder='https://planet_Image_Url' value={planet.surfaceWater} onChange={handleUpdate} />
                    <label className="form-label mt-4">Angle A (deg)</label>
                    <input className="form-control" type="number" name="angleA" step='0.00001' placeholder='(0-360)' value={planet.population} onChange={handleUpdate} />
                    <label className="form-label mt-4">Angle B (deg)</label>
                    <input className="form-control" type="number" name="angleB" step='0.00001' placeholder='(0-360)' value={planet.population} onChange={handleUpdate} />
                    <input className="btn btn-primary mt-4" type="submit" value="Log Planet" />
                </div>
            </form>
        </div>
    )
}

export default AddPlanet
