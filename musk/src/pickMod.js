import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

export default function PickMod (){
    const [ pickChoice, setPickChoice] = useState("")

    return (
        <div>
            <div >
                <button>Employee Info</button>
                <button>Absence</button>    
            </div>
        </div>
    );
}