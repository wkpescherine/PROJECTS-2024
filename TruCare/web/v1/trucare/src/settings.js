import './App.css';
import React, {useState} from 'react';

function Settings() {
    const[editSection,setEditSection] = useState ("");
    return (
        <div>
            <div>
                <p>Settings Screen</p>
            </div>
            <div style={{display: "flex", justifyContent:"center"}}>
                <div style={{width: "250px"}}>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient ID:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Name:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>
                        Patient Address:
                        <button  onClick={() => setEditSection("PA")}>Edit</button>
                    </p>
                    {editSection == "PA" && 
                        <div>                
                            <input type="text" placeholder="New Address" class="inputData200"></input>
                        </div>
                    }
                    <p style={{textAlign: "left", marginLeft: "20px"}}>
                        Patient State:
                        <button  onClick={() => setEditSection("PS")}>Edit</button>
                    </p>
                    {editSection == "PS" && 
                        <div>                
                            <input type="text" placeholder="New State" class="inputData200"></input>
                        </div>
                    }
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Zip Code:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Age Yrs:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Age Mos:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 1: Doctor 1 :</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 2: Doctor 2</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 3: Doctor 3</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 4: Doctor 4</p>
                </div>  
                <div style={{width: "250px"}}>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Months in System: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Rate of Accumulation: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Monthly Cost: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Investment to Date: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Expenses to Date: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Net Investment: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>+/-: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Months to Zero: </p>            
                </div>
            </div>
        </div>
    ); 
}

export default Settings;