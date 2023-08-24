import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CreateEntity = () => {
    const [name, setName] = useState("")
    const [mass, setMass] = useState(0)
    const [radius, setRadius] = useState(0)
    const [period, setPeriod] = useState(0)
    const [temperature, setTemperature] = useState(0)
    const [distanceLightYear, setDistanceLightYear] = useState(0)
    const [semiMajorAxis, setSemiMajorAxis] = useState(0)
    const [imageUrl, setImageUrl] = useState(0)
    const [angleA, setAngleA] = useState(0)
    const [angleB, setAngleB] = useState(0)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/planets/new`, { name, mass, radius, period, temperature, distanceLightYear, semiMajorAxis, imageUrl, angleA, angleB })
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
                    <label className="form-label mt-4" >Name</label>
                    <input className="form-control" type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Mass</label>
                    <input className="form-select" type="text" name='mass' value={mass} onChange={e => setMass(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Radius</label>
                    <input className="form-select" type="number" name='radius' value={radius} onChange={e => setRadius(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Period</label>
                    <input className="form-select" type="number" name='period' value={period} onChange={e => setPeriod(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Temperature</label>
                    <input className="form-select" type="number" name='temperature' value={temperature} onChange={e => setTemperature(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Distance (in Light Years)</label>
                    <input className="form-select" type="number" name='distanceLightYear' value={distanceLightYear} onChange={e => setDistanceLightYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Semi Major Axis</label>
                    <input className="form-select" type="number" name='semiMajorAxis' value={semiMajorAxis} onChange={e => setSemiMajorAxis(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Image</label>
                    <input className="form-select" type="number" name='imageUrl' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Angle A</label>
                    <input className="form-select" type="number" name='angleA' value={angleA} onChange={e => setAngleA(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Angle B</label>
                    <input className="form-select" type="number" name='angleB' value={angleB} onChange={e => setAngleB(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div>
    )

}
export default CreateEntity