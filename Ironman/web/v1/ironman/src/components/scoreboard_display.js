import React, {useState} from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function Scoreboard_Display() {
    return (
        <div style={{width: "200px"}}>
            <div style={{display:"flex", justifyContent:"center" }}>
                <label class="text75">Team 1</label>
                <label class="text25">0</label>
            </div>
            <div style={{display:"flex", justifyContent:"center" }}>
                <label class="text75">Team 2</label>
                <label class="text25">0</label>
            </div>
            <div style={{display:"flex", justifyContent:"center" }}>
                <label class="text100">Inning/QTR/Period</label>
            </div>
        </div>
    ); 
}

export default Scoreboard_Display;