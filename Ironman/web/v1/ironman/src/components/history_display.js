import React from 'react';
import '../App.css';

function History_Display(props) {
    return (
        <div class="horizontalContainer">
            <label class="text100">000000</label>
            <label class="text100">Self 75</label>
            <label class="text100">Opp 100</label>
            <label class="text50">64</label>
            <label class="text50">L</label>
            <label class="text75">
                <button onClick={()=>props.getHistScore("Score")}>View</button>
            </label>
        </div>
    ); 
}

export default History_Display;