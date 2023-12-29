import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type: 'LOGOUT_USER'});
    };
        const handleLogin = () => {
            dispatch({type: 'LOGIN'});
        };

        return (
            <div>
                <h1>My Application</h1>
                {user ? (
                    <div>
                        <p>Hello, {user}</p>
                        <button onClick={handleLogout}>Exit</button>
                    </div>
                ) : (
                    <div>
                        <p>You are not logged  <button onClick={handleLogin}>Login</button></p>

                    </div>
                )}
            </div>
        );

}
export default Header;