import React, {useState} from 'react';
import '../App.css';

import HistScore from "./historyScore"

function History_Display() {
    const[displayHistScore,setDisplayHistScore] = useState ("None");
    
    function handleHistScore(){
        if(displayHistScore == "Display"){
            setDisplayHistScore("None")
        }else {
            setDisplayHistScore("Display")
        }
    }

    return (
        <div class="horizontalContainer">
            <label class="text100">000000</label>
            <label class="text100">Self 75</label>
            <label class="text100">Opp 100</label>
            <label class="text50">64</label>
            <label class="text50">L</label>
            <label class="text75">
                <button onClick={handleHistScore}>View</button>
            </label>
            { displayHistScore ==="Display" && <HistScore /> }
        </div>
    ); 
}

export default History_Display;