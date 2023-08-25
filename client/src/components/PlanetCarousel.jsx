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
            <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} className="text-center">
                {planetList.map((eachPlanet, idx) => {
                    return (
                        <Carousel.Item key={idx} style={{width:'100vw',height:'70vh'}}>
                            <img src={eachPlanet.imageURL} style={{height:'100%'}} className='rounded-2' text="First slide" alt="Planet" />
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
