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
                <label>State:</label>
                <input type='text' style={{width: "40px"}}></input>
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
            <div>
                <label>Doctor</label>
                <label>City</label>
                <label>State</label>
                <label>Zip Code</label>
                <label>Occupation</label>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
        </div>
    ); 
}

export default Search;