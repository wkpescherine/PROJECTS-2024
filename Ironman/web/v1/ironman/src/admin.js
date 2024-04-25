import React, {useState} from 'react';
import './App.css';

import AdminLeagues from './componentsAdmin/adminLeagues';
import AdminTeams from './componentsAdmin/adminTeams';
import AdminPlayers from './componentsAdmin/adminPlayers';

function Admin() {
    const[adminLeague,setAdminLeague] = useState ("NFL");

    function handleAdminLeagueSelection (selection){
        setAdminLeague(selection)
    }

    return (
        <div>
            <p>Admin Panel</p>
            <AdminLeagues getAdminLeague={handleAdminLeagueSelection}/>
            <AdminTeams sendLeague={adminLeague}/>
            <AdminPlayers />
        </div>
    ); 
}

export default Admin;