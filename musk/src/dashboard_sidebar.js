import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import AdminSub from "./admin_sub"
import KnowSub from "./know_sub"

function Dashboard_Sidebar (props){
    const [ fromSub, setFromSub] = useState("")

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    function RedirectToSim(){
        navigate('/simulator')
    }

    const handleSubCategorySelection = (data2) => {
        setFromSub(data2)
        props.getSubCat(fromSub)
    }

    return (
        <div>
            <img src={require("./mta_logo_1.png")}/>  
            <p>UTS Support </p>
            <p>& Knowledge</p>
            <button class="invertButtonSidebar" onClick={() => props.getData("Home")}>Home</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Knowledge")}>Knowledge</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Support")}>Support</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Message")}>Message</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Admin")}>Admin</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectToSim}>Simulator</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
            <p>version 0.11</p>
        </div> 
    );
}

export default Dashboard_Sidebar; 