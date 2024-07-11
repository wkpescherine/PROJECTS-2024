import React from 'react';
import './App.css';

function Search() {
    return (
        <div style={{marginTop: "25px"}}>
            <p>Search by:</p>
            <div>
                <label>City:</label>
                <input type='text' style={{width: "100px"}}></input>
                <label>State:</label>
                <input type='text' style={{width: "25px"}}></input>
            </div>
            <div>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Family</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Dentist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Eye</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Allergist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Therapist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Psychiatrist</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Trainer</button>
                    <button style={{marginRight:"2px", fontSize: "12px"}}>Pharmacy</button>
                </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"150px", fontSize:"12px"}}>Doctor</p>
                <p style={{width:"100px", fontSize:"12px"}}>City</p>
                <p style={{width:"50px", fontSize:"12px"}}>State</p>
                <p style={{width:"100px", fontSize:"12px"}}>Zip Code</p>
                <p style={{width:"150px", fontSize:"12px"}}>Occupation</p>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
        </div>
    ); 
}

export default Search;