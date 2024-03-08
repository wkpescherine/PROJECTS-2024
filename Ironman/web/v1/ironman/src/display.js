import React from 'react';
import './App.css';

import Account from "./account"
import Home from "./home"
import Scoreboard from "./scoreboard"
import Tourn from "./tourn"
import History from "./history"
import Rules from "./rules"
import Current from "./current"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account"&& <Account />}
            {props.sendData === "Scoreboard"&& <Scoreboard />}
            {props.sendData === "Tourn"&& <Tourn />}
            {props.sendData === "History"&& <History />}
            {props.sendData === "Rules"&& <Rules />}
            {props.sendData === "Current"&& <Current />}
        </div>
    ); 
}

export default Display;