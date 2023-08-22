import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

const UserDashboard = () => {
    const [planetList, setPlanetList] = useState([]);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/planets`)
            .then(res => setPlanetList(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
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
