import React, {useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'

import SupperDisplay from "./support_display"
import SupportSideBar from "./support_sidebar"

export default function Support (){
    return (
        <div style={{display: "flex",justifyContent: "center"}}>
            < SupportSideBar />
            < SupperDisplay />
        </div>  
    );
}