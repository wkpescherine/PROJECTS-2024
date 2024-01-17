import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import HOME from "./home"
import PROFILE from "./profile"
import MARKETPLACE from "./marketplace"
import PORTFOLIO from "./portfolio"

function Dashboard (){
    const[section,setSection] = useState ("");

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <div>
                <p>
                    <button onClick={() => {setSection("Home")}}>Home</button>
                    <button onClick={() => {setSection("Profile")}}>Profile</button>
                    <button onClick={() => {setSection("Portfolio")}}>Portfolio</button>
                    <button onClick={() => {setSection("Marketplace")}}>Marketplace</button> 
                    <button onClick={RedirectTo}>Exit</button> 
                </p> 
            </div>
            <div>
                { section === "Home" && < HOME />}
                { section === "Profile" && < PROFILE />}
                { section === "Marketplace" && < MARKETPLACE />}
                { section === "Portfolio" && < PORTFOLIO />}
            </div>
        </div>
    );
}

export default Dashboard;