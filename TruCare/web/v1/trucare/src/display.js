import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function Display(props) {
    const[category,setCategory] = useState ("");

    let navigate = useNavigate();

    function selectCategory(choice){
        setCategory(choice);
    }
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div class="displayArea">
            <p>Display Area</p>
            {props.sendData === "Home"&& <p>Home</p>}
        </div>
    ); 
}

export default Display;