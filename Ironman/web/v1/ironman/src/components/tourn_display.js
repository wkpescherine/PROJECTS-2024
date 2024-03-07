import React, {useState} from 'react';
import '../App.css';

function Tourn_Display(props) {
    return (
        <div class="horizontalContainer">
            <label class="text100">{props.sendLeague}000000</label>
            <label class="text75">0</label>
            <label class="text75">128</label>
            <label class="text75">4/1/02</label>
            <label class="text75">7 days</label>
            <label class="text75">$5</label>
            <label class="text75">
                <button>Join</button>
            </label>
        </div>
    ); 
}

export default Tourn_Display;