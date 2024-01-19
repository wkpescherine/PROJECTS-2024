import './App.css';

import Support from "./support"

export default function Display (props){
    return (
        <div class="displayArea">
            { props.sendData === "Support" && < Support/>}
        </div>  
    );
}