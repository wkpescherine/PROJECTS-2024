import './App.css';

function PList() {
    return (
        <div>
            <p>Patient List Screen</p>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{width:"50px", fontSize:"12px"}}>ID</p>
                <p style={{width:"200px", fontSize:"12px"}}>Patient</p>
                <p style={{width:"100px", fontSize:"12px"}}>Email</p>
                <p style={{width:"100px", fontSize:"12px"}}>Contact #</p>
                <p style={{width:"100px", fontSize:"12px"}}>Action</p>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
        </div>
    ); 
}

export default PList;