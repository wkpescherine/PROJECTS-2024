import React from 'react';
import './App.css';

function Rules() {
    return (
        <div>
            <div class="headerEmpty"></div>
            <div class="headerBar">
                <p>Rules and Information</p>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "525px"}}/>
            <div>
                <p style={{marginTop: "5px"}}>
                    Rules and information about all the tyoes of games that we currently offer. As well as more details on the overall game concepts  that we are using. 
                </p>
                <p>Basic Rules</p>
                <p>1. All games are Ironman, which is that you will only be allowed to use an 1 player 1 time for every tournamnet.</p>
                <p>2. Al torunaments will have a min starting number of players, but will grow as more people apply to any one specifically.</p>
                <p>Types of Tournament</p>
                <p>1. Ironman - This is your basic Itronman that uses fantasy points scoring</p>
                <p>2. RT Ironman - This a game format that follows real world game action and replicates it within the game environment</p>
            </div>
        </div>
    ); 
}

export default Rules;