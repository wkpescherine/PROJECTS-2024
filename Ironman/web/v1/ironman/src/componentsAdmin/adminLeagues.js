import React, { useState } from 'react';
import '../App.css';

function AdminLeagues() {
    const [adminLeague, setAdminLeague] = useState("NFL");

    function handleSetAdminLeague(league){
        setAdminLeague(league);
    }

    return (
        <div>
            <button onClick={()=>handleSetAdminLeague("NFL")}>NFL</button>
            <button onClick={()=>handleSetAdminLeague("NBA")}>NBA</button>
            <button onClick={()=>handleSetAdminLeague("NHL")}>NHL</button>
            <button onClick={()=>handleSetAdminLeague("MLB")}>MLB</button>
        </div>
    ); 
}

export default AdminLeagues;