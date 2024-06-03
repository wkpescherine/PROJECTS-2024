import React, {useState} from 'react';
import './App.css';

import CaseHeader from "./caseheader"
import Case from "./case"

export default function Admin (){
    const [ adminSections, setAdminSections] = useState("Open")

    return (
        <div>
           <p>Admin Center</p>
           <button>Open</button>
           <button>Pending</button>
           <button>Closed</button>
           <button>Personal</button>
           < CaseHeader />
           {adminSections === "Closed" && < Case />}
        </div>
    );
}