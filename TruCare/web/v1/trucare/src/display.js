import React from 'react';
import './App.css';

import Account from "./account"
import Search from "./search"
import Home from "./home"
import Settings from "./settings"
import About from "./about"
import PList from "./plist"
import Billing from "./billing"
import Finance from "./finances"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
            {props.sendData === "Account" && <Account /> }
            {props.sendData === "Search" && <Search /> }
            {props.sendData === "Settings" && <Settings /> }
            {props.sendData === "About" && <About /> }
            {props.sendData === "List" && <PList /> }
            {props.sendData === "Billing" && <Billing /> }
            {props.sendData === "Finances" && <Finance /> }
        </div>
    ); 
}

export default Display;