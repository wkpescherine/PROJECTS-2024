import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import Sidebar from "./sidebar"
import Display from "./display"

import HOME from "./home"
import PROFILE from "./profile"
import MARKETPLACE from "./marketplace"
import PORTFOLIO from "./portfolio"

function Dashboard (){
    const[section,setSection] = useState ("Home");

    let navigate = useNavigate();

    const handleSetSection = (subData) =>{
        setSection(subData)
    }

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div style={{display: "flex",justifyContent: "center"}}>
            < Sidebar getData={handleSetSection}/>
            < Display sendData={section}/>
        </div>
    );
}

export default Dashboard;