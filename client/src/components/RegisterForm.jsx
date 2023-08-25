import axios from "axios";
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";

const RegisterForm = (props) => {
    const { name } = props;
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {setUserID} = useContext(UserContext);

    const [formErrors, setFormErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors({});
        axios.post(`http://localhost:8000/api/users`, { user }, { withCredentials: true })
            .then(res => {
                setUserID(res.data._id);
                navigate(`/dashboard`);
            })
            .catch(errors => setFormErrors(errors.response.data.errors));
    }

    const handleUpdate = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <div className=' mt-5 me-auto'>
            <h2 className='mb-5'>REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3 me-1">
                    <label htmlFor="firstName" className="col-6">First Name</label>
                    <input className="col-6 " type="text" name="firstName" value={user.firstName} onChange={handleUpdate}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label htmlFor="lastName" className="col-6">Last Name</label>
                    <input className="col-6 " type="text" name="lastName" value={user.lastName} onChange={handleUpdate}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label htmlFor="email" className="col-6">Email</label>
                    <input className="col-6" type="email" name="email" value={user.email} onChange={handleUpdate}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label htmlFor="password" className="col-6">Password</label>
                    <input className="col-6 " type="password" name="password" value={user.password} onChange={handleUpdate}></input>
                </div>
                <div className="row mb-3 me-1">
                    <label htmlFor="confirmPassword" className="col-6">Confirm Password</label>
                    <input className="col-6 " type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleUpdate}></input>
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
            {formErrors[name] && <p className="alert alert-danger">{formErrors[name].message}</p>}
        </div>
    );
}

export default RegisterForm;
