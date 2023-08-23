import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import image from "../images/logo.png"
import Navbar from '../components/Navbar';

const UserDashboard = () => {
    const [planetList, setPlanetList] = useState([]);
    const [index, setIndex] = useState(0);




    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/planets`, { withCredentials: true })
            .then(res => setPlanetList(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Navbar />
            <div>
                <p>Display Planet detail cards (carousel)</p>
                <p>Post reviews of each planet</p>
                <Link to='/new/trip'>Create New trip</Link>
                <Link to='/see_history'>See Past trips</Link>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <Carousel activeIndex={index} onSelect={handleSelect} className="text-center">
                        {planetList.map((eachPlanet, idx) => {
                            return (
                                <Carousel.Item key={idx}>
                                    <img src={eachPlanet.imageURL} style={{ maxWidth: 400, maxHeight: 300 }} text="First slide" alt="Planet" />
                                    <Carousel.Caption>
                                        <h2>{eachPlanet.name}</h2>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                <GalaxyChart />
            </div>
        </div >
    )
}

export default UserDashboard
