import React from 'react';
import Navbar from '../components/Navbar';
import AddPlanet from '../components/AddPlanet';

const CreateEntity = () => {

    return (
        <div>
            <Navbar />
            <div >
                <h1 className='m-3 text-center'>Add Space Entity</h1>
                <AddPlanet />
            </div>
        </div>
    )

}
export default CreateEntity