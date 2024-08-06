import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

export default function Pick (){
    const [ choice, setChoice] = useState("")

    function displayChoice(choice){
        setChoice(choice)
    }

    return (
        <div style={{display:"flex"}}>
            <div style={{width:"100px"}}>
                <button onClick={()=>displayChoice("cPick")}>Create Pick</button>
                <button>Create Package Group</button>
                <button>Create/Edit Run</button>
                <button>Run Pick</button>
                <button>Absence</button>    
            </div>
            <div>
                <p>{choice}</p>
            </div>
        </div>
    );
}