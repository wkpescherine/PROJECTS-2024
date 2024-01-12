import './App.css';
import React, {useState} from 'react';

export default function Employee (){
    const[pid,setPID] = useState ("");

    const handlePIDChange = (event) => {
        setPID(event.target.value)
    }

    return (
        <div>
            <div>
                <label class="baseText">P#</label>
                <input type="text" placeholder="" onChange={handlePIDChange}></input>
                <label class="baseText">B#</label>
                <input type="text" placeholder="" onChange={handlePIDChange}></input>
                <button>Find</button>
            </div>  
            <p>E:</p>
        </div>
    );
}