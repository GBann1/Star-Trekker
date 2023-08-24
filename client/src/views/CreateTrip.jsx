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
            <form className="w-25 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label class="form-label mt-4" >Start Date</label>
                    <input class="form-control" type="text" name='startDate' value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Planets</label>
                    <select class="form-select" name="planets" id="{planets}" onChange={e => setPlanets(e.target.value)}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option value={eachPlanet.name}>{eachPlanet.name}</option>

                            )

                        })}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">User Id</label>
                    <input class="form-select" type="text" name='userId' value={userId} onChange={e => setUserId(e.target.value)} />
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Time</label>
                    <input class="form-select" type="number" name='time' value={time} onChange={e => setTime(e.target.value)} />
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Cost</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" name='cost' value={cost} onChange={e => setCost(e.target.value)} />
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div >
    )
}

export default CreateTrip