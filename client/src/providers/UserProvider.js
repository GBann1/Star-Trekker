import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const UserProvider = ({ children }) => {
    const [userID, setUserID] = useState(null);

    return (
        <UserContext.Provider value={{ userID, setUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;