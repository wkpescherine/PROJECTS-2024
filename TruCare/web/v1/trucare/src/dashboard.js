import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import Sidebar from "./sidebar"
import Display from "./display"

function Dashboard() {
    //const[logInUsername,setLogInUsername] = useState ("");
    //const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    //const handleLogInUsernameChange = (event) => {
    //    setLogInUsername(event.target.value)
    //}

    //const handleLogInPasswordChange = (event) => {
    //    setLogInPassword(event.target.value)
    //}
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <p>Dashboard</p>
            <div style={{display: "flex",justifyContent: "center"}}>
                <Sidebar />
                <Display />
            </div>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button>   
            </p>
        </div>
    ); 
}

export default Dashboard;