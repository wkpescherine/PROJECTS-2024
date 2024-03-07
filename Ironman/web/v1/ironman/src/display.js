import React from 'react';
import './App.css';

import Account from "./account"
import Home from "./home"
import Scoreboard from "./scoreboard"
import Tourn from "./tourn"
import History from "./history"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account"&& <Account />}
            {props.sendData === "Scoreboard"&& <Scoreboard />}
            {props.sendData === "Tourn"&& <Tourn />}
            {props.sendData === "History"&& <History />}
        </div>
    ); 
}

export default Display;