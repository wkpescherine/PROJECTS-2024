import React from 'react';
import '../App.css';
import Display from '../display';

import Player from "./playerName"
import TScore from "./TournScore"

function Tourn_Dash() {
    return (
        <div class="horizontalContainer">
            <div>
                <label>Player List</label>
                <Player />
                <Player />
                <Player />
                <Player />
            </div>
            <hr style={{background:"#fff", height: "400px", width: "1px"}}/>
            <div>
                <label>Tourn Scoreboard</label>
                <div class="miniContainer">
                    <TScore />
                    <TScore />
                </div>
            </div>
        </div>
    ); 
}

export default Tourn_Dash;