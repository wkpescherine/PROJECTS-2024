import './App.css';
import {useState} from 'react'

import SportsCards from "./sports_cards"

function Marketplace (){
    const[category,setCategory] = useState ("");

    return (
        <div>
            <div>
                <button onClick={() => {setCategory("sc")}}>Sports Cards</button>
                <button>Gaming Cards</button>
                <button>Comic Books</button>
            </div>
            <div>
                { category === "sc" && < SportsCards />}
            </div>
            <p>Marketplace Section</p>
        </div>
    );
}

export default Marketplace;