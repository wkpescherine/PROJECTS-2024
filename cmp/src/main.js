import './App.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Main() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }
    
    function RedirectTo(){
        navigate('./dashboard')
    }

    function RedirectTo2(){
        navigate('./create')
    }

    return (
        <div>
            <h1>Collector Marketplace</h1>
            <p>
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button onClick={RedirectTo}>Login</button> 
                <button onClick={RedirectTo2}> Create Account</button>
            </p>
            <p>version 0.4</p>
        </div>
    ); 
}

export default Main;