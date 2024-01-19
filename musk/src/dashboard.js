import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import DashboardSideBar from './dashboard_sidebar'
import Display from "./display"

function Dashboard (){
    const [ category, setCategory] = useState("None")

    const handleCategorySelection = (data) => {
        setCategory(data)
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
                < DashboardSideBar passData={handleCategorySelection} sendCat={category}/>
                < Display sendData={category}/>
            </div>
        </div>  
    );
}

export default Dashboard;