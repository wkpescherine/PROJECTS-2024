import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import Sidebar from "./sidebar"
import Display from "./display"

function Dashboard() {
    const[section,setSection] = useState ("");

    let navigate = useNavigate();
    
    function handleSectionChoices (selection){
        setSection(selection)
    }

    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <p>Dashboard</p>
            <div style={{display: "flex",justifyContent: "center"}}>
                <Sidebar getData={handleSectionChoices}/>
                <Display sendData={section}/>
            </div>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button>   
            </p>
        </div>
    ); 
}

export default Dashboard;