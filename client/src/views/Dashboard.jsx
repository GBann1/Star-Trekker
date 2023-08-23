import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Dashboard = () => {
    //get axios call for their past travels
    const { id } = useParams();
    const [userTravels, setUserTravels] = useState([])

    axios.get(`http://localhost:8000/api/users/travels/${id}`)
        .then(res=>{
            const data = res.data
            setUserTravels(data)
        })
        .catch(err => console.log(err))
    return (
        <div>
            <h1>Your Travels</h1>
            <table>
                <thead>
                    <th>Date:</th>
                    <th>Length</th>
                    <th>Destination</th>
                    <th>Travel Time</th>
                </thead>
                <tbody>
                    {userTravels.map((trip,idx)=>{
                        // This needs to be a table to keep with our wireframe
                        return(
                            <tr key={idx}>
                                
                                <td>{trip.date}</td>
                                <td>{trip.length}</td>
                                
                                
                                <td>{trip.strtplanet} - {trip.endplanet}</td>
                                
                                <td>{trip.time}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
