import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

export default function Pick (props){
    const [ pickChoice, setPickChoice] = useState("")

    return (
        <div>
            <div >
                <p>{props.sendSel}</p>
                <button>Employee Info</button>
                <button>Absence</button>    
            </div>
        </div>
    );
}