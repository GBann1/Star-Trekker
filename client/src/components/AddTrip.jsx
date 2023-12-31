import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddTrip = () => {

    const { userID } = useContext(UserContext);
    const [planets, setPlanets] = useState([]);
    const [planetData, setPlanetData] = useState(null);

    const [trip, setTrip] = useState({
        startDate: "",
        startPlanet: "Earth",
        destination: "Mercury",
        time: 0,
        cost: 0,
        userId: userID
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
                navigate(`/see_history`)
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'startPlanet' || name === 'destination') {
            const selectedPlanetData = planets.find((planet) => planet.name === value);

            if (selectedPlanetData) {
                setPlanetData(selectedPlanetData);
                const fuel = calculateFuel(selectedPlanetData);
                const time = calculateTime(selectedPlanetData);

                setTrip({
                    ...trip,
                    [name]: value,
                    cost: fuel,
                    time: time,
                });
            }
        }
        else {
            setTrip({
                ...trip,
                [name]: value
            })
        }
    };

    return (
        <div className='w-25 mx-auto fs-3'>

            <form onSubmit={handleSubmit} >
                <div >
                    <label >Start Date</label>
                    <input type="date" name='startDate' className='form-control' value={trip.startDate} onChange={handleChange} required='true' />
                </div>
                <div>
                    <label>Starting Point:</label>
                    <select className="form-select" name="startPlanet" value={trip.startPlanet} onChange={handleChange}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option key={idx} value={eachPlanet.name}>{eachPlanet.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label >Destination</label>
                    <select className="form-select" name="destination" id="{planets}" onChange={handleChange}>
                        {planets.map((eachPlanet, idx) => {
                            return (

                                <option key={idx} value={eachPlanet.name}>{eachPlanet.name}</option>
                            )
                        })}
                    </select>
                </div>
                <hr></hr>
                <div>
                    <label>Estimated Fuel Cost</label>
                    <p>$ {trip.cost || ''}</p>
                </div>
                <div>
                    <label>Estimated Travel Time</label>
                    <p>{trip.time || ''} days</p>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div>
    )
}


export default AddTrip;
