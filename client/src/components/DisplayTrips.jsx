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
                // setTrips([...trips, data])
                setTrips(data)
            })
            .catch(err => console.log(err))

    }, [])
    console.log(trips)

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <th scope="col">Date:</th>
                    <th scope="col">Length</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Travel Time</th>
                </thead>
                <tbody>
                    {trips.map((trip, idx) => {
                        // This needs to be a table to keep with our wireframe
                        return (
                            <tr className="table-light" key={idx}>

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
