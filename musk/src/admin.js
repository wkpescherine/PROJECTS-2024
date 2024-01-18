import React, {useState} from 'react';
import './App.css';
//import {useNavigate} from 'react-router-dom'

import AdminSideBar from "./admin_sidebar";
import AdminDisplay from "./admin_display";

export default function Admin (){
    const [ subSection, setSubSection] = useState("None")

    return (
        <div>
           <p>Admin Section under development</p>
           <div style={{display: "flex",justifyContent: "center"}}>
                < AdminSideBar /> 
                < AdminDisplay />
            </div>
        </div>
    );
}