import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import BSC from "./bsc";
import UTS from "./uts";
import Knowledge from './knowledge';
import Support from './support';
import Planning from "./planning";
import Admin from './admin';

function Dashboard (){
    const [ sectionActive, setSectionActive] = useState("None")
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>
            <div >
                <div style={{display: "flex",justifyContent: "center"}}>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={() => {setSectionActive("UTS")}}>UTS</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                       <button class='invertButton' onClick={() => {setSectionActive("Knowledge")}}> Knowledge</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={() => {setSectionActive("Support")}}>Support</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={() => {setSectionActive("Admin")}}>Admin</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={() => {setSectionActive("BSC")}}>BSC</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={() => {setSectionActive("Planning")}}>Planning</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button class='invertButton' onClick={RedirectTo}>Exit</button> 
                    </div>
                </div>
            </div>
            <div>
                { sectionActive === "UTS" && < UTS />}
                { sectionActive === "Knowledge" && < Knowledge />}
                { sectionActive === "Support" && < Support />}
                { sectionActive === "BSC" && < BSC />}
                { sectionActive === "Planning" && < Planning />}
                { sectionActive === "Admin" && < Admin />}
            </div>  
        </div>  
    );
}

export default Dashboard;