import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import image from "../images/logo.png"

const Navbar = () => {

    const [user, setUser] = useState()

    const navigate = useNavigate();

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`, { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [])

    const logoutHandler = () => {
        axios.post(`http://localhost:8000/api/users/logout`, {}, { withCredentials: true })
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid d-flex">
                    <div className='align-item center'>
                        <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    </div>
                    <div>
                        <h1 className='align-item center-center '>Star Trekkers</h1>
                    </div>
                    <div className='align-item center-center '>
                        <ul className='navbar-nav me-auto '>
                            <li className="nav-item dropdown">
                                {
                                    user &&
                                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Welcome {user.firstName} {user.lastName} </Link>
                                }
                                <div className="dropdown-menu">
                                    {/* <Link className="dropdown-item" to={navigate(-1)}>Dashboard</Link> */}
                                    <Link className="dropdown-item" to="/trip">Start Your Trip</Link>
                                    <Link className="dropdown-item" to="/see_history">View Profile</Link>
                                    <Link className="dropdown-item" to="/entity">Add an Entity</Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={logoutHandler}>LOGOUT</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
}
export default Navbar