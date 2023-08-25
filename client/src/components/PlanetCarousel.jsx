import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const PlanetCarousel = () => {
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
        <div className="d-flex justify-content-center">
            <Carousel interval={null} activeIndex={index} onSelect={handleSelect} className="text-center">
                {planetList.map((eachPlanet, idx) => {
                    return (
                        <Carousel.Item key={idx}>
                            <img src={eachPlanet.imageURL} style={{ maxWidth: 300, maxHeight: 200 }} text="First slide" alt="Planet" />
                            <Carousel.Caption>
                                <h2>{eachPlanet.name}</h2>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default PlanetCarousel
