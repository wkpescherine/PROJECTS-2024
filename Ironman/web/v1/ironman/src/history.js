import React, {useState} from 'react';
import './App.css';

import HistoryDisplay from "./components/history_display"
import HistScore from "./components/historyScore"

function History() {
    const[displayHistScore,setDisplayHistScore] = useState ("None");
    
    function handleHistScore(){
        if(displayHistScore == "Score"){
            setDisplayHistScore("None")
        }else {
            setDisplayHistScore("Score")
        }
    }
    return (
        <div>
            <p>Previous Results</p>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <div class="headerBar">
                <label class="text100">Id</label>
                <label class="text200">Score</label>
                <label class="text50">RD</label>
                <label class="text50">Res</label>
                <label class="text75"></label>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <HistoryDisplay getHistScore={handleHistScore}/>
            {displayHistScore ==="Score" && <HistScore/> }
        </div>
    ); 
}

export default History;