import './App.css';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'


export default function Sidebar (props){
    const[section,setSection] = useState ("");

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <div>
                <button class="buttonStyle" onClick={() => props.getData("Home")}>Home</button>
                <br></br>
                <button class="buttonStyle" onClick={() => props.getData("Profile")}>Profile</button>
                <br></br>
                <button class="buttonStyle" onClick={() => {setSection("Portfolio")}}>Portfolio</button>
                <br></br>
                <button class="buttonStyle" onClick={() => {setSection("Marketplace")}}>Marketplace</button> 
                <br></br>
                <button class="buttonStyle" onClick={RedirectTo}>Exit</button>  
            </div>
        </div>
    );
}