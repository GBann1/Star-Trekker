import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const AddTrip = () => {

    const { id } = useParams();
    const [planets, setPlanets] = useState([]);

    const [trip, setTrip] = useState({
        startDate: "",
        startPlanet: "",
        destination: "",
        time: 0,
        cost: 0,
        userId: id
    })

    const navigate = useNavigate();

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
                    <label >Time</label>
                    <input type="number" name='time' value={trip.time} onChange={handleChange} />
                </div>
                <div>
                    <label >Cost</label>
                    <input type="number" name='cost' value={trip.cost} onChange={handleChange} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div>
    )
}

export default AddTrip
