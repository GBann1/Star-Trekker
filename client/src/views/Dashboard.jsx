import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Dashboard = () => {
    //get axios call for their past travels
    const {id} = useParams();
    const [userTravels, setUserTravels] = useState()

    axios.get(`http://localhost:8000/api/user/travels/${id}`)
        .then(res=>{
            const data = res.data
            setUserTravels(data)
        })
        .catch(err=>console.log(err))
    return (
        <div>
            <h1>Your Travels</h1>
            <table>
                <thead>
                    <th>This</th>
                    <th>is</th>
                    <th>a</th>
                    <th>table</th>
                </thead>
                <tbody>
                    {/* userTravels.map((trip,idx)=>{
                        // This needs to be a table to keep with our wireframe
                        return(
                            <tr key={idx}>
                                trip.length
                                <td>hello</td>
                                trip.planet
                                <td>there</td>
                                trip.time
                                <td>peeps</td>
                            </tr>
                        )
                    }) */}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
