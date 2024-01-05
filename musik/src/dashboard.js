import './App.css';
import {useNavigate} from 'react-router-dom'

import UTS from "./uts";
import Knowledge from './knowledge';
import Support from './support';
import { useState } from 'react';

function Dashboard (){
    const [ sectionActive, setSectionActive] = useState("None")
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div >
            <p>Currently under development</p>
            <div style={{display: "flex",justifyContent: "center"}}>
                <div style={{display: "flex",justifyContent: "center"}}>
                    <button>UTS</button>
                </div>
                <div style={{display: "flex",justifyContent: "center"}}>
                    <button> Knowledge</button>
                </div>
                <div style={{display: "flex",justifyContent: "center"}}>
                    <button>Support</button>
                </div>
            </div>
            { sectionActive == "UTS" && < UTS />}
            { sectionActive == "UTS" && < Knowledge />}
            { sectionActive == "UTS" && < Support />}
            <p>
                <button class='invertButton' onClick={RedirectTo}>Exit</button> 
            </p>   
        </div>  
    );
}

export default Dashboard;