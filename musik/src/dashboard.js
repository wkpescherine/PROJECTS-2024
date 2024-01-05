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
        <div>
            <div >
                <p>Currently under development</p>
                <div style={{display: "flex",justifyContent: "center"}}>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSectionActive("UTS")}}>UTS</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                       <button onClick={() => {setSectionActive("Knowledge")}}> Knowledge</button>
                    </div>
                    <div style={{display: "flex",justifyContent: "center"}}>
                        <button onClick={() => {setSectionActive("Support")}}>Support</button>
                    </div>
                </div>
            </div>
            <div>
                { sectionActive === "UTS" && < UTS />}
                { sectionActive === "Knowledge" && < Knowledge />}
                { sectionActive === "Support" && < Support />}
                <p>
                    <button class='invertButton' onClick={RedirectTo}>Exit</button> 
                </p> 
            </div>  
        </div>  
    );
}

export default Dashboard;