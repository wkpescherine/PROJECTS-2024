import './App.css';

import SideBar from "./uts_sidebar"
import Display from "./uts_display"

export default function UTS (){
    return (
        <div>
            <div style={{display: "flex",justifyContent: "center"}}>
                <SideBar />
                <Display /> 
            </div>
        </div>  
    );
}

//export default Dashboard;