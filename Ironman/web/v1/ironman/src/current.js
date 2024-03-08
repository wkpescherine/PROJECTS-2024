import React, {useState} from 'react';
import './App.css';

import CurrentDisplay from "./components/current_display"

function Current() {
    return (
        <div>
            <p>Current Tournamnets</p>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <div class="headerBar">
                <label class="text100">Id</label>
                <label class="text200">Score</label>
                <label class="text50">RD</label>
                <label class="text50">Res</label>
                <label class="text75"></label>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <CurrentDisplay />
        </div>
    ); 
}

export default Current;