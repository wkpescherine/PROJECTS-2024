import React from 'react';
import './App.css';

import Account from "./account"
import Search from "./search"
import Home from "./home"
import Settings from "./settings"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account" && <Account /> }
            {props.sendData === "Search" && <Search /> }
            {props.sendData === "Settings" && <Settings /> }
        </div>
    ); 
}

export default Display;