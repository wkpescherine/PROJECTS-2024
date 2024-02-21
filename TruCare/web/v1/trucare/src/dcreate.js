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
                <label>First Name</label> 
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
                <label>Last Name</label>
                <input type="text" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" class="inputData" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
                <label>Age:</label>
                <input type="text" placeholder="00/00/0000" class="inputData"></input>
                <label>Name/Title:</label>
                <input type="text" placeholder="Name/Title"></input>
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
                <p style={{margin:"5px"}}>Services and Rates:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <label>Visit: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Medication: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>X Rays: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                </div>
                <div>
                    <label>Blood Work: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Supplies: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Others: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                </div>
                    <div style={{fontSize: "8px", color: "#fff", margin: "5px"}}>While this does not cover all expenses. We suggest using average for any of the above . If not in the list use the Other.</div>
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