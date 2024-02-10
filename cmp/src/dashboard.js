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
    const[section,setSection] = useState ("");

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            < Sidebar />
            < Display />
        </div>
    );
}

export default Dashboard;