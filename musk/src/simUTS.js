import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function SimUTS() {
    return (
        <div style={{display: "flex",justifyContent: "center"}}>
            <div class="simBase">
                <img src={require("./SimImages/UTS_Header.png")}/>
                <div>
                    <img src={require("./SimImages/pick_image.png")}/>
                    <img src={require("./SimImages/crew_image.png")}/>
                </div>  
            </div>
        </div>
    ); 
}

export default SimUTS;