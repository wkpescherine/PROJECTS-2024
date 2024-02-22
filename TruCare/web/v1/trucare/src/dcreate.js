import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

function DCreate() {
    const[firstName,setFirstName] = useState ("");
    const[lastName,setLastName] = useState ("");
    const[DCUsername,setDCUsername] = useState ("");
    const[DCPassword,setDCPassword] = useState ("");
    const[street,setStreet] = useState ("");
    const[city,setCity] = useState ("");
    const[state,setState] = useState ("");
    const[zipcode,setZipCode] = useState ("");
    const[email,setEmail] = useState ("");
    

    let navigate = useNavigate();
    
    const handleFirstNameameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleDCUsernameChange = (event) => {
        setDCUsername(event.target.value)
    }

    const handleDCPasswordChange = (event) => {
        setDCPassword(event.target.value)
    }

    const handleStreetChange = (event) => {
        setStreet(event.target.value)
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleStateChange = (event) => {
        setState(event.target.value)
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
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
                <input type="text" placeholder="Enter username" onChange={handleFirstNameameChange}></input>
                <label>Last Name</label>
                <input type="text" placeholder="Enter password" onChange={handleLastNameChange}></input>
            </div>
            <div>
                <label>Username</label> 
                <input type="text" placeholder="Enter username" onChange={handleDCUsernameChange}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter password" onChange={handleDCPasswordChange}></input>
            </div>
            <div>
                <label>Street</label> 
                <input type="text" style={{width:"450px", backgroundColor:"#fff"}} onChange={handleStreetChange}></input>
            </div>
            <div>
                <label>City</label> 
                <input type="text" style={{width:"200px", backgroundColor:"#fff"}} onChange={handleCityChange}></input>
                <label>State</label>
                <input type="text" style={{width:"25px", backgroundColor:"#fff"}} onChange={handleStateChange}></input>
                <label>Zip Code</label>
                <input type="text" style={{width:"60px", backgroundColor:"#fff"}} onChange={handleZipCodeChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" style={{width: "200px", backgroundColor:"#fff"}} placeholder="Enter Email" onChange={handleEmailChange}></input>
                <label>Age:</label>
                <input type="text" class="inputData"></input>
                <label>Yrs Exp:</label>
                <input type="text" class="inputData"></input>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
            <div>
                <p style={{margin:"5px"}}>Medical Expertise:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <div>
                    <button style={{marginRight:"2px"}}>Family</button>
                    <button style={{marginRight:"2px"}}>Dentist</button>
                    <button style={{marginRight:"2px"}}>Eye</button>
                    <button style={{marginRight:"2px"}}>Allergist</button>
                    <button style={{marginRight:"2px"}}>Therapist</button>
                    <button style={{marginRight:"2px"}}>Psychiatrist</button>
                    <button style={{marginRight:"2px"}}>Trainer</button>
                    <button style={{marginRight:"2px"}}>Pharmacy</button>
                </div>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <p style={{margin:"5px"}}>Services and Rates:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <div>
                    <label>Visit: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Medication: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>X Rays: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Supplies: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                </div>
                <div>
                    <label>Blood Work: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Others: $</label>
                    <input type="text" style={{width:"40px", background:"#fff"}}></input>
                    <label>Custom:</label>
                    <input type="text" placeholder='Enter title' style={{width:"110px", background:"#fff"}}></input>
                    <input type="text" placeholder='Enter cost' style={{width:"50px", background:"#fff"}}></input>
                </div>
                    <div style={{fontSize: "8px", color: "#fff", margin: "5px"}}>While this does not cover all expenses. We suggest using average for any of the above . If not in the list use the Other.</div>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <p style={{margin:"5px"}}>Expected Visits:</p>
                <hr style={{background:"#fff", height: "1px", width: "550px"}}/>
                <div>
                    <label>
                        <input type="radio" value="normal"/>Once per year
                        <input type="radio" value="normal"/>2-4 per year
                        <input type="radio" value="normal"/>5-10 per year
                        <input type="radio" value="normal"/>11+ per year
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

export default DCreate;