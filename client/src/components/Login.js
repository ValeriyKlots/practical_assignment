import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';


const Login = ({ onEnter }) => {
    const [fullName, setFullName] = useState('');

    const handleEnter = () => {
        if (fullName.trim() !== '') {
            onEnter(fullName);
        }
    };

    return (
        <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <button onClick={handleEnter}>Enter</button>
        </div>
    );
};

export default Login;