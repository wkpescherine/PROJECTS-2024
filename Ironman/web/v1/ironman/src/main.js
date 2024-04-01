import React, {useState} from 'react';
import './App.css';
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

    function RedirectToCreate(){
        navigate("./create")
    }

    function RedirectToDashboard(){
        navigate('./dashboard')
    }

    return (
        <div>
            <p>IRONMAN</p>
            <p>
                <input class="inputField" type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input class="inputField" type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <p>
                    <button class='invertButton' onClick={RedirectToDashboard}>Login</button>  
                </p>
                <p>
                    <button class='invertButton' onClick={RedirectToCreate}>Create</button>  
                </p>
            </div>
            <p>version 0.14.0</p>
        </div>
    ); 
}

export default Main;