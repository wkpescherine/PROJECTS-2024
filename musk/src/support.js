import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

export default function Support (){
    const[supportTitle,setSupportTitle] = useState ("");
    const[supportDesc,setSupportDesc] = useState ("");

    let navigate = useNavigate();
    
    const handleSupportTitle = (event) => {
        setSupportTitle(event.target.value)
    }

    const handleSupportDesc = (event) => {
        setSupportDesc(event.target.value)
    }
    return (
        <div>
            <p>
                <input type="text" placeholder="Enter title here" onChange={handleSupportTitle} style={{width:360}}></input>
            </p>
            <p>
                <textarea placeholder="Enter your description of issue here" onChange={handleSupportDesc} rows="20" cols="47"/>
            </p>
            <p>
                <input type="text" placeholder="Upload file here" style={{width:300}}></input>
                <button>Search</button>
            </p>
            <p>
                <button>Submit</button>
                <button>Clear</button> 
            </p>
        </div>  
    );
}