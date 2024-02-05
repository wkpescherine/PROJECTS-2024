import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import HomeSidebar from "./home_sidebar"
import HomeDisplay from "./home_display"

function Home (){

    return (
        <div style={{display: "flex",justifyContent: "center"}}>
            < HomeSidebar />
            < HomeDisplay /> 
        </div>  
    );
}

export default Home;