import React from 'react';
import './App.css';

import Account from "./account"
import Home from "./home"
import Scoreboard from "./scoreboard"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account"&& <Account />}
            {props.sendData === "Scoreboard"&& <Scoreboard />}
        </div>
    ); 
}

export default Display;