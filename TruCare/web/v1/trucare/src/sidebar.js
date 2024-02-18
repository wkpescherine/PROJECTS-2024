import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Sidebar(props) {
    let navigate = useNavigate();
    
    function RedirectToExit(){
        navigate('/')
    }

    return (
        <div>
            <button class='sidebarbutton' onClick={() => props.getData("Home")}>Home</button> 
            <br></br>
            <button class='sidebarbutton' onClick={() => props.getData("Account")}>Account</button> 
            <br></br>
            <button class='sidebarbutton' onClick={() => props.getData("Search")}>Search</button> 
            <br></br>
            <button class='sidebarbutton' onClick={() => props.getData("Settings")}>Setting</button> 
            <br></br>
            <button class='sidebarbutton' onClick={RedirectToExit}>Exit</button>  
        </div>
    ); 
}

export default Sidebar;