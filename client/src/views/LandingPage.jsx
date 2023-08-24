import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../images/logo.png"
import GalaxyChart from '../components/GalaxyChart'
const LandingPage = () => {
    return (
        <div className="mh-100">
            {/* Leave this NOT a Navbar component as the navbar component has clickable buttons now */}
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex">
                    <div className='align-item center'>
                        <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    </div>
                    <div>
                        <h1 className='align-item center-center'>Star Trekker</h1>
                    </div>
                    <div className='align-item center-center'>
                        <button className="btn btn-light" onClick={() => navigate('/login_or_register')}>Sign Up or Login!</button>
                    </div>
                </div>
            </nav>
            <h2>Welcome to Star Trekkers home site!</h2>
            <p>Here you can explore all of the features of our website and play around with some of the content.</p>
            <p>We hope you enjoy!</p>
            <GalaxyChart/>
        </div>
    )
}

export default LandingPage
