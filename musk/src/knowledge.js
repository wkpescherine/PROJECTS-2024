import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

//import Pick from "./pickMod"
import Pick from "./pick"
//import Crew from "./crew"

export default function Knowledge (props){
    const [ subSection, setSubSection] = useState("None")

    return (
        <div>
            <div>
                <p>{props.sendSel}</p>
                {props.sendSel === "Pick" && <Pick />}
            </div>
        </div>
    );
}