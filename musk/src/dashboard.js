import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import DashboardSideBar from './dashboard_sidebar'
import Display from "./display"

function Dashboard (){
    const [ category, setCategory] = useState("Home")

    const handleCategorySelection = (data) => {
        setCategory(data)
    }

    return (
        <div>
            <div style={{display: "flex",justifyContent: "center"}}>
                < DashboardSideBar passData={handleCategorySelection} sendCat={category}/>
                < Display sendData={category}/>
            </div>
        </div>  
    );
}

export default Dashboard;