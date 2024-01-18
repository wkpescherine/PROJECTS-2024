import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

import Pick from "./picks"
import Crew from "./crew"

export default function Knowledge (){
    const [ subSection, setSubSection] = useState("None")

    return (
        <div>
            <div >
                <div style={{display: "flex",justifyContent: "center"}}>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSubSection("Pick")}}>Pick</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                    <button onClick={() => {setSubSection("Crew")}}> Crew</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSubSection("Timekeeping")}}>Timekeeping</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSubSection("LPC")}}>LPC</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSubSection("Admin")}}>Admin</button>
                    </div>
                </div>
            </div>
            <div>
                { subSection === "Pick" && < Pick />}
                { subSection === "Crew" && < Crew />}
            </div>
        </div>
    );
}