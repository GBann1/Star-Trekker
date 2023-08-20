import React, { useState } from 'react'
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
            {userTravels.map((trip,idx)=>{
                return(
                    <div key={idx}>
                        <h1>hello</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard
