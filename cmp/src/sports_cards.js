import './App.css';
import {useState} from 'react'

function Sports_Cards (){
    const[market,setMarket] = useState ("");
    return (
        <div>
            <div>
                <button onClick={() => {setMarket("nfl")}}>NFL</button>
                <button>NBA</button>
                <button>MLB</button>
                <button>NHL</button>
            </div>
            <div>
                { market === "nfl" && <p>NFL Market</p>}
            </div>
        </div>
    );
}

export default Sports_Cards