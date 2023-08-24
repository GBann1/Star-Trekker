import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DisplayTrips = () => {
    const { id } = useParams();
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trips/${id}`)
            .then(res => {
                const data = res.data
                setTrips(data)
                console.log(id)
            })
            .catch(err => console.log(err))

    }, []

    )

    return (
        <div>
            <table>
                <thead>
                    <th>Date:</th>
                    <th>Length</th>
                    <th>Destination</th>
                    <th>Travel Time</th>
                </thead>
                <tbody>
                    {trips.map((trip, idx) => {
                        // This needs to be a table to keep with our wireframe
                        return (
                            <tr key={idx}>

                                <td>{trip.startDate}</td>
                                <td>{trip.time}</td>


                                <td>{trip.strtplanet} - {trip.destination}</td>

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
