import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import HOME from "./home"
import PROFILE from "./profile"
import MARKETPLACE from "./marketplace"
import PORTFOLIO from "./portfolio"

export default function Display (props){
    //const[section,setSection] = useState ("Home");

    return (
        <div>
            <div class="displayArea">
                { props.sendData === "Home" && < HOME />}
                { props.sendData === "Profile" && < PROFILE />}
                { props.sendData === "Marketplace" && < MARKETPLACE />}
                { props.sendData === "Portfolio" && < PORTFOLIO />}
            </div>
        </div>
    );
}