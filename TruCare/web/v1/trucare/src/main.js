import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import Users from "./usersDB.json"
import Docters from "./doctorDB.json"

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
        navigate('./')
    }

    function RedirectToDCreate(){
        navigate('./dcreate')
    }

    function RedirectToPCreate(){
        navigate('./pcreate')
    }

    function RedirectUnderDev(){
        if((logInUsername === Users.username) && (logInPassword=== Users.password)){
            navigate('./dashboard')
        }
    }

    function RedirectToDashboard(){
        navigate('./dashboard')
    }

    return (
        <div>
            <p style={{fontSize: "64px"}}>TRUCARE</p>
            <p>Health Finance System</p>
            <p>
                <input class="inputField" type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input class="inputField" type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button class='invertButton' onClick={RedirectToDashboard}>Login</button> 
                <button class='invertButton' onClick={RedirectToPCreate}>Create Patient</button>
                <button class='invertButton' onClick={RedirectToDCreate}>Create Doctor</button>  
            </p>
            <p>version 0.25</p>
        </div>
    ); 
}

export default Main;