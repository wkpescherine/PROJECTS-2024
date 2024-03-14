import React from 'react';
import './App.css';

import Account from "./account"
import Home from "./home"
import Scoreboard from "./scoreboard"
import Tourn from "./tourn"
import History from "./history"
import Rules from "./rules"
import Current from "./current"
import TournDash from "./components/tourn_dash"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account"&& <Account />}
            {props.sendData === "Scoreboard"&& <Scoreboard />}
            {props.sendData === "Tourn"&& <Tourn getFormat={props.getData}/>}
            {props.sendData === "History"&& <History />}
            {props.sendData === "Rules"&& <Rules />}
            {props.sendData === "Current"&& <Current />}
            {props.sendData === "Tourn_Dash"&& <TournDash />}
        </div>
    ); 
}

export default Display;