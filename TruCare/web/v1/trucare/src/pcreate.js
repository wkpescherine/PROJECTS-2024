import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function PCreate() {
    const[logInUsername,setLogInUsername] = useState ("");
    const[logInPassword,setLogInPassword] = useState ("");
    const[pcAddresss,setPCAddress] = useState("");
    const[cellNum, setCellNum]= useState("");

    let navigate = useNavigate();
    
    const handleLogInUsernameChange = (event) => {
        setLogInUsername(event.target.value)
    }

    const handleLogInPasswordChange = (event) => {
        setLogInPassword(event.target.value)
    }

    const handleCellNumChange = (event) => {
        setCellNum(event.target.value)
    }

    const handlePCAddressChange = (event) => {
        setPCAddress(event.target.value)
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
            <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" class="inputData100" onChange={handleLogInUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" class="inputData100" onChange={handleLogInPasswordChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Enter password" class="inputData100" onChange={handleLogInPasswordChange}></input>
                <label>Age:</label>
                <input type="text" placeholder="00/00/0000" class="inputData100"></input>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <p style={{margin:"5px"}}>Contact Info:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <div>
                    <label>Address</label> 
                    <input style={{width:"425px", background:"#fff"}} type="text" placeholder="Enter Addresss" onChange={handlePCAddressChange}></input>
                </div>
                <div>
                    <label>City</label> 
                    <input style={{width:"125px", background:"#fff"}} type="text" placeholder="City"></input>
                    <label>State</label> 
                    <input style={{width:"25px", background:"#fff"}} type="text" placeholder="State"></input>
                    <label>Zip</label> 
                    <input style={{width:"50px", background:"#fff"}} type="text" placeholder="Zip Code"></input>
                </div>
                <div>
                    <label>Cell#</label> 
                    <input style={{width:"125px", background:"#fff"}} type="text" placeholder="(000)000-0000"  onChange={handleCellNumChange}></input>
                </div>
            <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
            <div>
                <p style={{margin:"5px"}}>Select Doctor:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
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
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <p style={{margin:"5px"}}>Rate of Coverage:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <div>
                    <label>
                        <input type="radio" value="normal"/>Slow(.5x)
                    </label>
                    <label>
                        <input type="radio" value="normal"/>Basic(1x)
                    </label>
                    <label>
                        <input type="radio" value="normal"/>Fast(1.2x)
                    </label>
                    <label>
                        <input type="radio" value="normal"/>Hype(1.5x)
                    </label>
                    <label>    
                        <input type="radio" value="normal"/>Super(2x)
                    </label>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>                
            </div>
            <p>
                <button class='invertButton' onClick={RedirectToExit}>Exit</button> 
                <button class='invertButton' onClick={RedirectToDashboard}>Create</button>  
            </p>
        </div>
    ); 
}

export default PCreate;