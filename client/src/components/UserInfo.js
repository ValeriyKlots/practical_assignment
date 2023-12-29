import React from 'react';
import Login from "./Login";

const UserInfo = ({ userName, onLogout }) => (
    <div>
        <h2>Welcome, {userName}!</h2>
        <button onClick={onLogout}>Logout</button>
    </div>
);

export default UserInfo;