import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import image from "../images/logo.png"

const UserDashboard = () => {
    const [planetList, setPlanetList] = useState([]);
    const [user, setUser] = useState()
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const { id } = useParams()

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/planets`, { withCredentials: true })
            .then(res => setPlanetList(res.data))
            .catch(err => console.log(err))

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
                                    <Link className="dropdown-item" href="#">Start Your Journey</Link>
                                    <Link className="dropdown-item" href="#">View Profile</Link>
                                    <Link className="dropdown-item" href="#">Add an Entity</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" href="#">LOGOUT</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div>
                <p>Display Planet detail cards (carousel)</p>
                <p>Post reviews of each planet</p>
                <Link to='/new/trip'>Create New trip</Link>
                <Link to='/see_history'>See Past trips</Link>
                {/* <GalaxyChart /> */}
            </div>
            <div>
                <div>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {planetList.map((eachPlanet, idx) => {
                            return (
                                <Carousel.Item key={idx}>
                                    <img src={eachPlanet.imageURL} style={{ maxWidth: 300 }} text="First slide" />
                                    <Carousel.Caption>
                                        <h2>{eachPlanet.name}</h2>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div >
    )
}

export default UserDashboard
