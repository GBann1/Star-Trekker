import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/api/login`)
            .then(response => {
                //map through responses and see if we get a valid one
                const newlyCreatedUser = response.data
                navigate(`/`)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label for="email" className="col-6">Email</label>
                    <input className="col-6" type="email" name="email" value={email}></input>
                </div>
                <div className="row mb-3">
                    <label for="password" className="col-6">password</label>
                    <input className="col-6" type="password" name="password" value={password}></input>
                </div>
                
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
