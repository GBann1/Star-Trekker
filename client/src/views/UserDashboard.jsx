import React from 'react'
import {Link} from 'react-router-dom';
import GalaxyChart from '../components/GalaxyChart';
const UserDashboard = () => {
    return (
        <div>
            <p>Display Planet detail cards (carousel)</p>
            <p>Post reviews of each planet</p>
            <Link to='/new/trip'>Create New trip</Link>
            <Link to='/see_history'>See Past trips</Link>
            <GalaxyChart/>
        </div>
    )
}

export default UserDashboard
