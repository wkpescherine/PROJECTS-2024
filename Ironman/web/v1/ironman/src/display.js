import React from 'react';
import './App.css';

//import Account from "./account"
import Home from "./home"

function Display(props) {
    return (
        <div class="displayArea">
            {props.sendData === "Home"&& <Home />}
        </div>
    ); 
}

export default Display;