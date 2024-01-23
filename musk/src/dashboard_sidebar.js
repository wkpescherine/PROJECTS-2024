import './App.css';
import {useNavigate} from 'react-router-dom'

import AdminSub from "./admin_sub"

function Dashboard_Sidebar (props){
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <img src={require("./mta_logo_1.png")}/>  
            <p>UTS Support </p>
            <p>& Knowledge</p>
            <button class="invertButtonSidebar" onClick={() => props.passData("Home")}>Home</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.passData("Knowledge")}>Knowledge</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.passData("Support")}>Support</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.passData("Message")}>Message</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.passData("Admin")}>Admin</button>
            {props.sendCat ==="Admin" && <AdminSub />} 
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
        </div> 
    );
}

export default Dashboard_Sidebar; 