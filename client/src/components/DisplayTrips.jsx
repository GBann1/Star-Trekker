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
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Fuel Cost</th>
                        <th scope="col">Start Planet</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Travel Time</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, idx) => {
                        // This needs to be a table to keep with our wireframe
                        return (
                            <tr className="table-light" key={idx}>
                                <td>{trip.startDate}</td>
                                <td>$ {trip.cost}</td>
                                <td>{trip.startPlanet}</td>
                                <td>{trip.destination}</td>
                                <td>{trip.time} days</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTrips
