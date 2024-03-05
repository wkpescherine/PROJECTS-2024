import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Create() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    function RedirectToDashboard(){
        navigate('/dashboard')
    }
    
    function RedirectToExit(){
        navigate('/')
    }

    return (
        <div>
            <p>Create Account</p>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </div>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button> 
                <button class='invertButton' onClick={RedirectToDashboard}>Create</button>  
            </p>
        </div>
    ); 
}

export default Create;