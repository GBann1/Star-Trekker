import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/users/register`, { firstName, lastName, email, password }, {withCredentials: true})
            .then(response => {
                const newlyCreatedUser = response.data
                navigate(`/`)
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='container mt-5 me-5'>
            <h2 className='mb-5'>REGISTER</h2>
            <form className="" onSubmit={handleSubmit}>
                <div className="row mb-3 me-1">
                    <label for="first_name" className="col-6">First Name</label>
                    <input className="col-6 " type="text" name="first_name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label for="last_name" className="col-6">Last Name</label>
                    <input className="col-6 " type="text" name="last_name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label for="email" className="col-6">Email</label>
                    <input className="col-6" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label for="password" className="col-6">password</label>
                    <input className="col-6 " type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label for="cpass" className="col-6">Confirm Password</label>
                    <input className="col-6 " type="password" name="cpass" value={password}></input>
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm
