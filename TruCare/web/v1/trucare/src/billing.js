import './App.css';

function Billing() {
    return (
        <div>
            <p>Billing Screen</p>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"50px", fontSize:"12px"}}>ID</p>
                <input type='text' style={{width: "75px"}}></input>
                <p style={{width:"100px", fontSize:"12px"}}>Patient Name</p>
                <input type='text' style={{width: "200px"}}></input>
                <button style={{marginLeft:"10px"}}>Search</button>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display: "flex", height:"30px"}}>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Visit</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}></input>
                <p style={{width: "75px", height:"25px", alignSelf:"center"}}>Medication</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}></input>
                <p style={{width: "75px", height:"25px", alignSelf:"center"}}>Bloodwork</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}></input>
            </div>
            <div style={{display: "flex", height:"30px"}}>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Cleaning</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center"}}></input>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Braces</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center"}}></input>
                <p style={{width: "75px", height:"25px", alignSelf:"center"}}>Extraction</p>
                <input type='text' style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}></input>
            </div>
            <div style={{display: "flex", height:"30px"}}>
                <p style={{width: "75px", height:"25px", alignSelf:"center", fontSize: "14px"}}>Other</p>
                <input type='text' placeholder="Enter Code " style={{width: "150px", height:"25px", alignSelf:"center"}}></input>
                <input type='text' placeholder='Enter Cost' style={{width: "75px", height:"25px", alignSelf:"center"}}></input>
                <button> Add</button>
            </div>
            <p style={{width: "500px", height:"25px", alignSelf:"center", justifyContent:"center"}}>Current Cost $0</p>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display: "flex", justifyContent: "center" }}>
                <button>Evaluate</button>
                <button>Save</button>
                <button>Recall</button>
                <button>Clear</button>
                <button>Email</button>
                <button>Charge</button>
            </div>
        </div>
    ); 
}

export default Billing;