import React, {useState} from 'react';
import '../App.css';

function Tourn_Display(props) {
    return (
        <div class="horizontalContainer">
            <label class="text100">{props.sendLeague}00000{props.sendFormat}</label>
            <label class="text75">0</label>
            <label class="text75">128</label>
            <label class="text75">4/1/02</label>
            <label class="text75">7 days</label>
            <label class="text75">$5</label>
            <label class="text75">
                <button onClick={() => props.getCurrent("Current")}>Join</button>
            </label>
        </div>
    ); 
}

export default Tourn_Display;