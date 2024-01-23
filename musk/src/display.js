import './App.css';

import Support from "./support"
import Home from "./home"
import Message from "./messages"

export default function Display (props){
    return (
        <div class="displayArea">
            { props.sendData === "Home" && < Home/>}
            { props.sendData === "Support" && < Support/>}
            { props.sendData === "Message" && < Message/>}
        </div>  
    );
}