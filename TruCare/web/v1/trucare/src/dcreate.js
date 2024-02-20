import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function DCreate() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    function RedirectToDashboard(){
        navigate('/dashboard')
    }
    
    function RedirectToExit(){
        navigate('/')
    }

    //Test codethat I can switch in
    //<button onClick={checkLogInCred}>Login</button> 

    return (
        <div>
            <p>Create New Doctor</p>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
                <label>Age:</label>
                <input type="text" placeholder="00/00/0000" class="inputData"></input>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div>
                <p style={{margin:"5px"}}>Medical Expertise:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <button>Family</button>
                    <button>Dentist</button>
                    <button>Eye</button>
                    <button>Allergist</button>
                    <button>Therapist</button>
                    <button>Psychiatrist</button>
                    <button>Trainer</button>
                    <button>Pharmacy</button>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <p style={{margin:"5px"}}>Expected Visits:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <label>
                        <input type="radio" value="normal"/>Once per year
                        <input type="radio" value="normal"/>2-4 per year
                        <input type="radio" value="normal"/>5-10 per year
                        <input type="radio" value="normal"/>11+ per year
                    </label>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>                
            </div>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button> 
                <button class='invertButton' onClick={RedirectToDashboard}>Create</button>  
            </p>
        </div>
    ); 
}

export default DCreate;