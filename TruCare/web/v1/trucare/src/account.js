import './App.css';

function Account() {
    return (
        <div>
            <div>
                <p>Account Details</p>
            </div>
            <div style={{display: "flex", justifyContent:"center"}}>
                <div style={{width: "250px"}}>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient ID:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Name:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Address:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient State:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Zip Code:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Age Yrs:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Patient Age Mos:</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 1: Doctor 1 :</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 2: Doctor 2</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 3: Doctor 3</p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Occupation 4: Doctor 4</p>
                </div>
                <div style={{width: "250px"}}>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Months in System: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Rate of Accumulation: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Monthly Cost: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Investment to Date: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Expenses to Date: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Net Investment: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>+/-: </p>
                    <p style={{textAlign: "left", marginLeft: "20px"}}>Months to Zero: </p>            
                </div>
            </div>
        </div>
    ); 
}

export default Account;