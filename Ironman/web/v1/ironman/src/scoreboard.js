import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Scoreboard() {
    const[leagues, setLeagues] = useState ("NFL");

    const handleSetLeagues = (choice) => {
        setLeagues(choice);
    }

    return (
        <div>
            <p>Live Scoreboard</p>
            <div>
                <button class="headerButton" onClick={() => handleSetLeagues("NFL")}>NFL</button>
                <button class="headerButton" onClick={() => handleSetLeagues("NBA")}>NBA</button>
                <button class="headerButton" onClick={() => handleSetLeagues("MLB")}>MLB</button>
                <button class="headerButton" onClick={() => handleSetLeagues("NHL")}>NHL</button>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <p>{leagues}</p>
        </div>
    ); 
}

export default Scoreboard;