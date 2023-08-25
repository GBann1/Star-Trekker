import React from 'react';
import Navbar from '../components/Navbar';
import DisplayTrips from '../components/DisplayTrips';
import {useNavigate} from 'react-router-dom';
import addIcon from '../images/plus-circle.svg'

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <h1 style={{margin:'10px'}}>View Your Travels:</h1>
            <DisplayTrips/>
            <div style={{textAlign:'right', marginRight:'1%'}}>
                <img src={addIcon} onClick={()=>navigate('/trip')} style={{backgroundColor:'rgb(253, 246, 227)', border:'2px solid rgb(131, 148, 150)', borderRadius:'50%', height:'40px'}}></img>
            </div>
        </div>
    )
}

export default Dashboard
