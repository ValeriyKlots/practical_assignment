import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from './redux/actions/userActions';
import Posts from './components/Posts';

import users from './users';
import Header from "./components/Header";

function App() {

  useEffect(() => {
    // TEST API, it might be removed
    fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
  }, []);

  return (
      <div className="App">
          {/*<Header/>*/}
            <div>
              <label>Привет </label>
              <button >Выйти</button>
            </div>
        <div>
          <Posts/>
        </div>

      </div>
  );
};

export default App;
