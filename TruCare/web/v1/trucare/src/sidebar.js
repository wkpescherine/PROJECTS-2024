import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Sidebar(props) {
    //const[category,setCategory] = useState ("");

    let navigate = useNavigate();

    //function selectCategory(choice){
    //    setCategory(choice);
    //}
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <button class='invertButton' onClick={() => props.getData("Home")}>Home</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Account")}>Account</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Search")}>Search</button> 
            <br></br>
            <button class='invertButton' onClick={() => props.getData("Setting")}>Setting</button> 
            <br></br>
            <button class='invertButton' onClick={RedirectToExit}>Exit</button>  
        </div>
    ); 
}

export default Sidebar;