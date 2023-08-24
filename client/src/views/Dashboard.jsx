import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import DisplayTrips from '../components/DisplayTrips';

const Dashboard = () => {
    
    return (
        <div>
            <Navbar />
            <h1>Your Travels</h1>
            <DisplayTrips/>
        </div>
    )
}

export default Dashboard
