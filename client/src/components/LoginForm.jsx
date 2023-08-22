import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../libs/context";

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [formData, setFormData] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const { setLoggedUser } = useAppContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/users/login`, {user}, {withCredentials: true})
            .then(response => {
                //map through responses and see if we get a valid one
                const newlyCreatedUser = response.data;
                navigate(`/`)
                navigate(`/dashboard/${newlyCreatedUser._id}`)
            })
            .catch(errors => setFormErrors(errors.response.data.errros))
    }

    const handleUpdate = (e) => {
        let {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <div className='container mt-5'>
            <h2 className='mb-5'>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3 me-1">
                    <label htmlFor="email" className="col-6">Email</label>
                    <input className="col-6" type="email" name="email" value={user.email} onChange={handleUpdate}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label htmlFor="password" className="col-6">Password</label>
                    <input className="col-6" type="password" name="password" value={user.password} onChange={handleUpdate}></input>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
