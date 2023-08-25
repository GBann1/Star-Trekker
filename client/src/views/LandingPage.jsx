import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../images/logo.png";
import GalaxyChart from '../components/GalaxyChart';
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="mh-100">
            {/* Leave this NOT a Navbar component as the navbar component has clickable buttons now */}
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex">
                    <div className='me-5'>
                        <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    </div>
                    <div>
                        <h1 className='ms-4'>Star Trekkers</h1>
                    </div>
                    <div>
                        <button className="btn btn-light" onClick={() => navigate('/login_or_register')}>Sign Up or Login!</button>
                    </div>
                </div>
            </nav>
            <div className='text-center'>
                <h2 className='shadow' style={{ fontSize: '62pt' }}>Welcome to Star Trekkers home site!</h2>
                <p style={{fontSize:'20pt'}}>Have some fun and explore our map of the solor system.</p>
                <p style={{fontSize:'20pt'}}>We hope you enjoy!</p>

            </div>
            <GalaxyChart />
        </div>
    )
}

export default LandingPage
