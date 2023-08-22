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

    const { id } = useParams()

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/planets`)
            .then(res => setPlanetList(res.data))
            .catch(err => console.log(err))

        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid d-flex">
                    <div className='align-item center'>
                        <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    </div>
                    <div>
                        <h1 className='align-item center-center '>Star Trekkers</h1>
                    </div>
                    <div className='align-item center-center '>
                        <ul className='navbar-nav me-auto '>
                            <li class="nav-item dropdown">
                                {
                                    user ?
                                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Welcome {user.firstName} </a> : <h1>Loading</h1>
                                }
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Start Your Journey</a>
                                    <a class="dropdown-item" href="#">View Profile</a>
                                    <a class="dropdown-item" href="#">Add an Entity</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">LOGOUT</a>
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
                                <Carousel.Item>
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
