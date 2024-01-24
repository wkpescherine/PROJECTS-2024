import React, {useState} from 'react';
import './App.css';

import CaseHeader from "./caseheader"
import Case from "./case"

export default function Admin (){
    const [ adminSections, setAdminSection] = useState("Open")

    return (
        <div>
           <p>Admin Center</p>
           <p>{adminSections}</p>
           < CaseHeader />
           < Case />
        </div>
    );
}