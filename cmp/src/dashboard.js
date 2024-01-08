import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Dashboard (){
    const[section,setSection] = useState ("");

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <p>
                <button onClick={() => {setSection("Home")}}>Home</button>
                <button onClick={() => {setSection("Profile")}}>Profile</button>
                <button onClick={() => {setSection("Marketplace")}}>Marketplace</button> 
                <button onClick={RedirectTo}>Exit</button> 
            </p> 
        </div>  
    );
}

export default Dashboard;