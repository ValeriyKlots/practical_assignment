import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleRegister = () => {
        if (username.trim() !== '') {
            dispatch({ type: 'REGISTER_USER', payload: username });
        } else {
            alert('Enter Login');
        }
    };

    return (
        <div>
            <h2>Registration user</h2>
            <label htmlFor="usernameInput">Login:</label>
            <input
                type="text"
                id="usernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;