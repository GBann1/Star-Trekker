import React, { useState, useEffect, useContext } from 'react'
import UserContext from "../context/UserContext";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DisplayTrips = () => {
    const { userID } = useContext(UserContext);
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trips/${userID}`)
            .then(res => {
                const data = res.data
                setTrips(data)
            })
            .catch(err => console.log(err))

    }, []

    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date:</th>
                        <th>Length</th>
                        <th>Destination</th>
                        <th>Travel Time</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, idx) => {
                        // This needs to be a table to keep with our wireframe
                        return (
                            <tr key={idx}>

                                <td>{trip.startDate}</td>
                                <td>{trip.time}</td>


                                <td>{trip.startPlanet} - {trip.destination}</td>

                                <td>{trip.time}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default DisplayTrips
