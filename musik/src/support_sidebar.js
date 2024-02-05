import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

function Support_Sidebar (){
    const [ category, setCategory] = useState("")

    let navigate = useNavigate();

    function RedirectToHome(){
        navigate('/home')
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
            <button class="invertButtonSidebar" onClick={() => setCategory("Knowledge")}>Knowledge</button>
            <br></br>
            <button class="invertButtonSidebar">Support</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => setCategory("Message")}>Message</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => setCategory("Admin")}>Admin</button>
            <br></br>
            <button class="invertButtonSidebar">Executive Dashboard</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
        </div> 
    )

}

export default Support_Sidebar;