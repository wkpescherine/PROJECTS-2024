import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

export default function UTSSidebar (){
    const [ category, setCategory] = useState("")

    let navigate = useNavigate();

    function RedirectToHome(){
        navigate('/home')
    }

    function RedirectToSupport(){
        navigate('/support')
    }

    function RedirectTo(){
        navigate('/')
    }
    return (
        <div>
            <img src={require("./mta_logo_1.png")}/>  
            <p>UTS Support </p>
            <p>& Knowledge</p>
            <button class="invertButtonSidebar" onClick={RedirectToHome}>Home</button>
            <br></br>
            <button class="invertButtonSidebar">UTS</button>
            <br></br>
            <button class="invertButtonSidebar">BSC</button>
            <br></br>
            <button class="invertButtonSidebar">Planning</button>
            <br></br>
            <button class="invertButtonSidebar">Knowledge</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectToSupport}>Support</button>
            <br></br>
            <button class="invertButtonSidebar">Message</button>
            <br></br>
            <button class="invertButtonSidebar">Admin</button>
            <br></br>
            <button class="invertButtonSidebar">Executive Dashboard</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
        </div>  
    );
}