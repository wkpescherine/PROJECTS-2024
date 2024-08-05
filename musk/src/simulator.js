import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
//import MTA_Logo_1 from "./mta_logo_1.png"

function Simulator() {

    let navigate = useNavigate();
    
    function RedirectToDashboard(){
        navigate('/dashboard')
    }

    return (
        <div>
            <img src={require("./mta_logo_1.png")}/>
            <p>UTS Support & Knowledge</p>
            <p>Simulator</p>
            <p>
                <button class='invertButton' onClick={RedirectToDashboard}>Exit Simulator</button> 
            </p>
        </div>
    ); 
}

export default Simulator;