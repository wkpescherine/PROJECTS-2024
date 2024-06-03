import './App.css';

import Support from "./support"
import Home from "./home"
import Message from "./messages"
import Admin from "./admin"
import Knowledge from "./knowledge"

export default function Display (props){
    return (
        <div class="displayArea">
            { props.sendData === "Home" && < Home/>}
            { props.sendData === "Support" && < Support/>}
            { props.sendData === "Message" && < Message/>}
            { props.sendData === "Admin" && < Admin/>}
            { props.sendData === "Knowledge" && < Knowledge sendSel={props.sendSubCat}/>}
        </div>  
    );
}