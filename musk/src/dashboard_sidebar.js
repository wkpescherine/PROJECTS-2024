import './App.css';
import {useNavigate} from 'react-router-dom'

import AdminSub from "./admin_sub"
import KnowSub from "./know_sub"

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
            <button class="invertButtonSidebar" onClick={() => props.getData("Home")}>Home</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Knowledge")}>Knowledge</button>
            {props.sendCat ==="Knowledge" && <KnowSub />} 
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Support")}>Support</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Message")}>Message</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.getData("Admin")}>Admin</button>
            {props.sendCat ==="Admin" && <AdminSub />} 
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
        </div> 
    );
}

export default Dashboard_Sidebar; 