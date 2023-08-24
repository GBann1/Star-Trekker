import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
import Navbar from '../components/Navbar';
import PlanetCarousel from '../components/PlanetCarousel';

const UserDashboard = () => {
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
                <PlanetCarousel />
                <GalaxyChart />
            </div>
        </div >
    )
}

export default UserDashboard
