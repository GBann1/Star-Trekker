import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const AddTrip = () => {

    const { id } = useParams();
    const [planets, setPlanets] = useState([]);
    const [planetData, setPlanetData] = useState(null);

    const [trip, setTrip] = useState({
        startDate: "",
        startPlanet: "",
        destination: "",
        time: 0,
        cost: 0,
        userId: id
    })

    const navigate = useNavigate();

    const calculateFuel = (planetData) => {
        if (planetData && planetData.distance_light_year) {
            const distMiles = planetData.distance_light_year * 5878625000000;
            const fuelCost = (distMiles / 8.3) * 1.65;
            return fuelCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return "Nope";
    };

    const calculateTime = (planetData) => {
        if (planetData && planetData.distance_light_year) {
            const distMiles = planetData.distance_light_year * 5878625000000;
            const time = (distMiles / 16150) / 24;
            return time.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return "Nah";
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/planets`)
            .then(resp => {
                setPlanets(resp.data)
                console.log(planets)
            })
            .catch(err => setPlanets(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/trips/new`, { trip })
            .then(response => {
                navigate(`/see_history/${id}`)
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setTrip({
            ...trip,
            [name]: value
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Start Date</label>
                    <input type="date" name='startDate' value={trip.startDate} onChange={handleChange} />
                </div>
                <div>
                    <label>Starting Point:</label>
                    <select className="form-select w-25" name="startPlanet" onChange={handleChange}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option value={eachPlanet.name}>{eachPlanet.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label >Destination</label>
                    <select className="form-select w-25" name="destination" id="{planets}" onChange={handleChange}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option value={eachPlanet.name}>{eachPlanet.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Calculated Fuel Cost</label>
                    <p>{planetData ? (trip.fuelCost || 'N/A') : 'Please select a planet'}</p>
                </div>
                <div>
                    <label>Calculated Travel Time</label>
                    <p>{planetData ? (trip.travelTime || 'N/A') : 'Please select a planet'}</p>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div>
    )
}


export default AddTrip;
