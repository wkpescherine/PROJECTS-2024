import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
//import MTA_Logo_1 from "./mta_logo_1.png"

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

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <img src={require("./mta_logo_1.png")}/>
            <p>UTS SUpport & Knowledge</p>
            <p>
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
            </p>
            <p>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </p>
            <p>
                <button class='invertButton' onClick={RedirectTo}>Login</button> 
            </p>
            <p>version 0.4 </p>
        </div>
    ); 
}

export default Main;