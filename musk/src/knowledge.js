import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

//import Pick from "./pickMod"
import Pick from "./pick"
import Crew from "./crew"
import Timekeeping from "./timekeeping"
import LPC from "./lpc"
//import Crew from "./crew"

export default function Knowledge (props){
    const [ subSection, setSubSection] = useState("None")

    return (
        <div>
            <div>
                <p>{props.sendSel}</p>
                {props.sendSel === "Pick" && <Pick />}
                {props.sendSel === "Crew" && <Crew />}
                {props.sendSel === "Timekeeping" && <Timekeeping />}
                {props.sendSel === "LPC" && <LPC />}
            </div>
        </div>
    );
}