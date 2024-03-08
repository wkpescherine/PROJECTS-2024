import React, {useState} from 'react';
import '../App.css';

function Current_Display() {
    return (
        <div class="horizontalContainer">
            <label class="text100">000000</label>
            <label class="text100">Self 0</label>
            <label class="text100">Opp 0</label>
            <label class="text50">64</label>
            <label class="text50">-</label>
            <label class="text75">
                <button>View</button>
            </label>
        </div>
    ); 
}

export default Current_Display;