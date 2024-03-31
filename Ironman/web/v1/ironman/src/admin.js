import React from 'react';
import './App.css';

import AdminLeagues from './componentsAdmin/adminLeagues';
import AdminTeams from './componentsAdmin/adminTeams';
import AdminPlayers from './componentsAdmin/adminPlayers';

function Admin() {
    return (
        <div>
            <p>Admin Panel</p>
            <AdminLeagues />
            <AdminTeams />
            <AdminPlayers />
        </div>
    ); 
}

export default Admin;