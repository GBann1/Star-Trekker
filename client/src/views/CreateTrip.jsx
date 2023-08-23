import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CreateTrip = () => {
    const [startDate, setStartDate] = useState("")
    const [planets, setPlanets] = useState([])
    const [userId, setUserId] = useState("")
    const [time, setTime] = useState(0)
    const [cost, setCost] = useState(0)

    const navigate = useNavigate()

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
        axios.post(`http://localhost:8000/api/trip/new`, { startDate, planets, userId, time, cost })
            .then(response => {
                navigate(`/see_history`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Start Date</label>
                    <input type="text" name='startDate' value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label >Planets</label>
                    <select className="form-select" name="planets" id="{planets}" onChange={e => setPlanets(e.target.value)}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option value={eachPlanet.name}>{eachPlanet.name}</option>

                            )

                        })}
                    </select>
                </div>
                <div>
                    <label >User Id</label>
                    <input type="text" name='userId' value={userId} onChange={e => setUserId(e.target.value)} />
                </div>
                <div>
                    <label >Time</label>
                    <input type="number" name='time' value={time} onChange={e => setTime(e.target.value)} />
                </div>
                <div>
                    <label >Cost</label>
                    <input type="number" name='cost' value={cost} onChange={e => setCost(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div >
    )
}

export default CreateTrip