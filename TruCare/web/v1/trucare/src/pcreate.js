import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function PCreate() {
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
            <p>Create New Patient</p>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="password" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
                <label>Age: Yrs</label>
                <input type="text" placeholder="YRS" class="inputData"></input>
                <label>Mos</label>
                <input type="text" placeholder="MOS" class="inputData"></input>
            </div>
            <div>
                <p style={{margin:"5px"}}>Select Doctor:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <button>Family</button>
                    <button>Dentist</button>
                    <button>Eye</button>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <p style={{margin:"5px"}}>State:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <p style={{margin:"5px"}}>Rate of Coverage:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <label>
                        <input type="radio" value="normal"/>Slow
                        <input type="radio" value="normal"/>Normal
                        <input type="radio" value="normal"/>Fast
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

export default PCreate;