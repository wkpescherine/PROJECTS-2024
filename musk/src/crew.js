import React, {useState} from 'react';
import './App.css';

export default function Crew (props){
    const [ pickChoice, setPickChoice] = useState("")

    return (
        <div>
            <div >
                <p>{props.sendSel}</p>
                <button>Daily Pullin//OUT</button>
                <button>Vacation Relief</button>    
            </div>
        </div>
    );
}