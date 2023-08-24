import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import AddTrip from '../components/AddTrip'

const CreateTrip = () => {

    return (
        <div>
            <Navbar />
            <form className="w-25 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label mt-4" >Start Date</label>
                    <input className="form-control" type="text" name='startDate' value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Planets</label>
                    <select className="form-select" name="planets" id="{planets}" onChange={e => setPlanets(e.target.value)}>
                        {planets.map((eachPlanet, idx) => {
                            return (
                                <option value={eachPlanet.name}>{eachPlanet.name}</option>

                            )

                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">User Id</label>
                    <input className="form-select" type="text" name='userId' value={userId} onChange={e => setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Time</label>
                    <input className="form-select" type="number" name='time' value={time} onChange={e => setTime(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Cost</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" name='cost' value={cost} onChange={e => setCost(e.target.value)} />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form >
        </div >
    )
}

export default CreateTrip