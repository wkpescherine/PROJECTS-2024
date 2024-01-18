import './App.css';

import SideBar from "./sidebar"
import Display from "./display"

export default function UTS (){
    return (
        <div>
            <p>UTS under development</p>
            <div style={{display: "flex",justifyContent: "center"}}>
                <SideBar />
                <Display /> 
            </div>
        </div>  
    );
}

//export default Dashboard;