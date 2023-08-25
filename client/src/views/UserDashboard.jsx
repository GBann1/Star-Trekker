import React from 'react'
import { Link } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import Navbar from '../components/Navbar';
import PlanetCarousel from '../components/PlanetCarousel';

const UserDashboard = () => {

    return (
        <div>
            <Navbar />
            <div className='text-center'>
                <h1 className='shadow' style={{ fontSize: '65pt' }}>Travel Exploration</h1>
                <p style={{ fontSize: '24pt' }}>Please explore our planets to choose your next vacation</p>
                <div style={{marginBottom:'15px'}}>
                    <Link to='/trip' className='btn btn-outline-light' style={{width:'8%', marginRight:'5px'}}>Ready to travel?</Link>
                    <Link to='/see_history' className='btn btn-outline-light' style={{width:'8%', marginLeft:'5px'}}>Past travels</Link>
                </div>
            </div>
            <div>
                <PlanetCarousel />
                <GalaxyChart />
            </div>
        </div >
    )
}

export default UserDashboard
