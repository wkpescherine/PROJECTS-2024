import './App.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import DashboardSideBar from './dashboard_sidebar'
import Display from "./display"

function Dashboard (){
    const [ category, setCategory] = useState("Home")
    const [ subCategory, setSubCategory] = useState("")


    const handleCategorySelection = (data) => {
        setCategory(data)
        //setSubCategory("")
    }

    const handleSubCategorySelection = (subData) =>{
        setSubCategory(subData)
    }

    return (
        <div>
            <div style={{display: "flex",justifyContent: "center"}}>
                < DashboardSideBar 
                    getData={handleCategorySelection} 
                    sendCat={category} 
                    getSubCat={handleSubCategorySelection}
                />
                < Display sendData={category} sendSubCat={subCategory}/>
            </div>
        </div>  
    );
}

export default Dashboard;