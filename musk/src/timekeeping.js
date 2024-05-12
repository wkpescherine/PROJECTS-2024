import React, {useState} from 'react';
import './App.css';

export default function TimeKeeping (props){
    const [ pickChoice, setPickChoice] = useState("")

    return (
        <div>
            <div >
                <p>{props.sendSel}</p>
                <button>Prior Period Adjust</button>
                <button>Bi-Weekly Pay</button>    
            </div>
        </div>
    );
}