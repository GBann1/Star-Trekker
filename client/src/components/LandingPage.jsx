import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../images/logo.png"

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mh-100">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <img style={{ height: 50, width: 50 }} className='img-fluid' src={`${image}`} alt="logo" />
                    <h1>Star Trekker</h1>
                    <button className="btn btn-light" onClick={() => navigate('/login_or_register')}>Sign Up or Login!</button>
                </div>
            </nav>
            <h2>Welcome to Star Trekkers home site!</h2>
            <p>Here you can explore all of the features of our website and play around with some of the content.</p>
            <p>We hope you enjoy!</p>

        </div>
    )
}

export default LandingPage
