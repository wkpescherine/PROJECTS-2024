import React, {useState} from 'react';
import './App.css';

import TournDisplay from "./components/tourn_display"

function Tourn() {
    const[leagues, setLeagues] = useState ("NFL");

    const handleSetLeagues = (choice) => {
        setLeagues(choice);
    }
    return (
        <div>
            <p>Current Open Tournaments</p>
            <div>
                <button class="headerButton" onClick={() => handleSetLeagues("NFL")}>NFL</button>
                <button class="headerButton" onClick={() => handleSetLeagues("NBA")}>NBA</button>
                <button class="headerButton" onClick={() => handleSetLeagues("MLB")}>MLB</button>
                <button class="headerButton" onClick={() => handleSetLeagues("NHL")}>NHL</button>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <div class="headerBar">
                <label class="text100">Id</label>
                <label class="text75">Players</label>
                <label class="text75">Max #</label>
                <label class="text75">Start</label>
                <label class="text75">Length</label>
                <label class="text75">Cost</label>
                <label class="text75">Status</label>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <TournDisplay sendLeague={leagues}/>
            <TournDisplay sendLeague={leagues}/>
        </div>
    ); 
}

export default Tourn;