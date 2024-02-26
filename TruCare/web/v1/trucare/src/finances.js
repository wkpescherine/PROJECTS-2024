import './App.css';

function Finances() {
    return (
        <div>
            <p>Finance Screen</p>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <p class="text100">ID # :</p>
                <p class="text199">Title</p>
                <p class="text100">Field:</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <p class="text100">Year: :</p>
                <button>2024</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <p class="text100">Month</p>
                <button>Jan</button>
                <button>Feb</button>
                <button>Mar</button>
                <button>Apr</button>
                <button>May</button>
                <button>Jun</button>
                <button>Jul</button>
                <button>Aug</button>
                <button>Sep</button>
                <button>Oct</button>
                <button>Nov</button>
                <button>Dec</button>
            </div>
            <hr style={{background:"#fff", height: "1px", width: "500px"}}/>
        </div>
    ); 
}

export default Finances;