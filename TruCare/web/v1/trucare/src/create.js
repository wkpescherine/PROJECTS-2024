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
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <p>Create New Patient</p>
            <p>
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button> 
                <button class='invertButton'>Create</button>  
            </p>
        </div>
    ); 
}

export default Create;