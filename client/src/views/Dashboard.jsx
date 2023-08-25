import React from 'react';
import Navbar from '../components/Navbar';
import DisplayTrips from '../components/DisplayTrips';
import {Link} from 'react-router-dom';
import addIcon from '../images/plus-circle.svg'

const Dashboard = () => {
    
    return (
        <div>
            <Navbar />
            <h1 style={{margin:'10px'}}>View Your Travels:</h1>
            <DisplayTrips/>
            <div className='text-align-right'>
                <Link to='/trip' ><img src={addIcon}></img></Link>
            </div>
        </div>
    )
}

export default Dashboard
