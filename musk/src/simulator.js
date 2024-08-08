import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
//import MTA_Logo_1 from "./mta_logo_1.png"
import UTSim from "./simUTS"

function Simulator() {

    let navigate = useNavigate();
    
    function RedirectToDashboard(){
        navigate('/dashboard')
    }

    return (
        <div>
            <div style={{display: "flex",justifyContent: "center"}}>
                <div class="tinyLogo">
                    <img src={require("./mta_logo_1.png")}/>
                </div>
            </div>
            <UTSim />
            <p> 
                <button class='invertButton' onClick={RedirectToDashboard}>Exit Simulator</button> 
            </p>
        </div>
    ); 
}

export default Simulator;