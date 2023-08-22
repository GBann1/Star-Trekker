import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import image from "../images/logo.png"
import { useNavigate, useParams } from 'react-router-dom'

const UserDashboard = () => {
    const [planetList, setPlanetList] = useState([]);
    const [firstName, setFirstName] = useState()
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
            .then(res => setFirstName(res.data))
            .catch()
    }, [])


    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid d-flex">
                    <div className='align-item center'>
                        <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    </div>
                    <div>
                        <h1 className='align-item center-center'>Hello {id}</h1>
                    </div>
                    <div className='align-item center-center'>

                    </div>
                </div>
            </nav>
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
        </div>
    )
}

export default UserDashboard
