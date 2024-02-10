import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import HOME from "./home"
import PROFILE from "./profile"
import MARKETPLACE from "./marketplace"
import PORTFOLIO from "./portfolio"

export default function Display (){
    const[section,setSection] = useState ("Home");

    return (
        <div>
            <div>
                { section === "Home" && < HOME />}
                { section === "Profile" && < PROFILE />}
                { section === "Marketplace" && < MARKETPLACE />}
                { section === "Portfolio" && < PORTFOLIO />}
            </div>
        </div>
    );
}