import './App.css';
import {useNavigate} from 'react-router-dom'

function Dashboard_Sidebar (props){
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div> 
            <button class="invertButtonSidebar">Knowledge</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={() => props.passDate("Support")}>Support</button>
            <br></br>
            <button class="invertButtonSidebar">Admin</button>
            <br></br>
            <button class="invertButtonSidebar" onClick={RedirectTo} >Exit</button>
        </div> 
    );
}

export default Dashboard_Sidebar; 