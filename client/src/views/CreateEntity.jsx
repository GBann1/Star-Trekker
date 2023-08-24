import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddPlanet from '../components/AddPlanet'

const CreateEntity = () => {
    // const [name, setName] = useState("")
    // const [mass, setMass] = useState(0)
    // const [radius, setRadius] = useState(0)
    // const [period, setPeriod] = useState(0)
    // const [temperature, setTemperature] = useState(0)
    // const [distanceLightYear, setDistanceLightYear] = useState(0)
    // const [semiMajorAxis, setSemiMajorAxis] = useState(0)
    // const [imageUrl, setImageUrl] = useState(0)
    // const [angleA, setAngleA] = useState(0)
    // const [angleB, setAngleB] = useState(0)

    // const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post(`http://localhost:8000/api/planets/new`, { name, mass, radius, period, temperature, distanceLightYear, semiMajorAxis, imageUrl, angleA, angleB })
    //         .then(response => {
    //             navigate(`/see_history`)
    //         })
    //         .catch(err => console.log(err))

    // }

    return (
        <div>

            <Navbar />
            <AddPlanet/>
        </div>
    )

}
export default CreateEntity