import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const UserProvider = ({ children }) => {
    const storedUserId = localStorage.getItem("userID")
    const [userID, setUserID] = useState(storedUserId);

    return (
        <UserContext.Provider value={{ userID, setUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;