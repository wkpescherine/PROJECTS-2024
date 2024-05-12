import React, {useState} from 'react';
import './App.css';

export default function LPC (props){
    const [ pickChoice, setPickChoice] = useState("")

    return (
        <div>
            <div >
                <p>{props.sendSel}</p>
                <button>Sick Abuse</button>
                <button>Phone List</button>    
            </div>
        </div>
    );
}