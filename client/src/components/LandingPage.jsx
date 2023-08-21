import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Star Trekker</h1>
            <h2>Welcome to Star Trekkers home site!</h2>
            <p>Here you can explore all of the features of our website and play around with some of the content.</p>
            <p>We hope you enjoy!</p>
            <div>
                <button onClick={()=> navigate('/login_or_register')}>Sign Up or Login!</button>
            </div>
            
        </div>
    )
}

export default LandingPage
