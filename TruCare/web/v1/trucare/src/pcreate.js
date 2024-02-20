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
                <input type="text" placeholder="Enter password" onChange={handleLogInPasswordChange}></input>
                <label>Age:</label>
                <input type="text" placeholder="00/00/0000" class="inputData"></input>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div>
                <p style={{margin:"5px"}}>Select Doctor:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <button>Family</button>
                    <button>Dentist</button>
                    <button>Eye</button>
                    <button>Allergist</button>
                    <button>Therapist</button>
                    <button>Psychiatrist</button>
                    <button>Trainer</button>
                    <button>Dietiationist</button>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <p style={{margin:"5px"}}>Contact Info:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <label>Address</label> 
                    <input style={{width:"410px", background:"#fff"}} type="text" placeholder="Enter Addresss"></input>
                </div>
                <div>
                    <label>City</label> 
                    <input style={{width:"180px", background:"#fff"}} type="text" placeholder="Enter Addresss"></input>
                    <label>State</label> 
                    <input style={{width:"50px", background:"#fff"}} type="text" placeholder="Enter Addresss"></input>
                    <label>Zip</label> 
                    <input style={{width:"100px", background:"#fff"}} type="text" placeholder="Enter Addresss"></input>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <p style={{margin:"5px"}}>Rate of Coverage:</p>
                <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
                <div>
                    <label>
                        <input type="radio" value="normal"/>Slow(.5x)
                        <input type="radio" value="normal"/>Normal (1x)
                        <input type="radio" value="normal"/>Fast(1.25x)
                        <input type="radio" value="normal"/>Hyper(1.5x)
                        <input type="radio" value="normal"/>Super(2x)
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