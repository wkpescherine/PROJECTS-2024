import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'


export default function Sidebar (){
    const[section,setSection] = useState ("");

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <div>
                <button onClick={() => {setSection("Home")}}>Home</button>
                <br></br>
                <button onClick={() => {setSection("Profile")}}>Profile</button>
                <br></br>
                <button onClick={() => {setSection("Portfolio")}}>Portfolio</button>
                <br></br>
                <button onClick={() => {setSection("Marketplace")}}>Marketplace</button> 
                <br></br>
                <button onClick={RedirectTo}>Exit</button>  
            </div>
        </div>
    );
}