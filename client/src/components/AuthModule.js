
import React, { useState } from 'react';
import Login from './Login';
import UserInfo from './UserInfo';

const AuthModule = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleEnter = (fullName) => {
        setUserName(fullName);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </div>
            ) : (
                <div>
                    <Login onEnter={handleEnter} />
                    <UserInfo userName={userName} onLogout={handleLogout} />
                </div>
            )}
        </div>
    );
};

export default AuthModule;