import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import DashboardSidebar from './dashboard_sidebar';
import Display from "./display"

function Dashboard (){
    const [ category, setCategory] = useState("None")

    const handleCategorySelection = (event) => {
        setCategory(event.target.value)
    }

    return (
        <div>
            <div >
                <p>Mta</p>
                <p>Uts</p>
                <p>Support</p>
                <p>Knowledge</p>
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
                < DashboardSidebar passData={handleCategorySelection}/>
                < Display />
            </div>
        </div>  
    );
}

export default Dashboard;