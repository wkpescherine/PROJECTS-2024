import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

//import Pick from "./pickMod"
import Pick from "./pick"
import Crew from "./crew"
import Timekeeping from "./timekeeping"
import LPC from "./lpc"
//import Crew from "./crew"

export default function Knowledge (){
    const [ subSection, setSubSection] = useState("None")

    function selectSubSection(choice){
        if(choice === subSection){
            setSubSection("None")
        }else{
            setSubSection(choice)
        }
    }

    return (
        <div>
            <div>
                <p>Knowledge Base</p>
                <button onClick={()=>selectSubSection("Pick")}>Pick</button>
                <button onClick={()=>selectSubSection("Crew")}>Crew</button>
                <button onClick={()=>selectSubSection("Timekeeping")}>Timekeeping</button>
                <button onClick={()=>selectSubSection("LPC")}>LPC</button>
                {/*{props.sendSel === "Pick" && <Pick />}
                {props.sendSel === "Crew" && <Crew />}
                {props.sendSel === "Timekeeping" && <Timekeeping />}
                {props.sendSel === "LPC" && <LPC />}*/}
                {subSection === "Pick" && <Pick />}
                {subSection === "LPC" && <LPC />}
                {subSection === "Timekeeping" && <Timekeeping />}
                {subSection === "Crew" && <Crew />}
            </div>
        </div>
    );
}