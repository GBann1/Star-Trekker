import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <h1>We're sorry, but something went wrong with your data call</h1>
            <p>Please try again later</p>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Page404
