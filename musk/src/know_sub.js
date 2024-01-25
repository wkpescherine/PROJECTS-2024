import './App.css';

export default function Know_Sub (props){
    return (
        <div> 
            <button class="subCategoryButton" onClick={() => props.getSubSelect("Pick")}>Pick</button>
            <br></br>
            <button class="subCategoryButton" onClick={() => props.getSubSelect("Crew")}>Crew</button>
            <br></br>
            <button class="subCategoryButton">Timekeeping</button>
            <br></br>
            <button class="subCategoryButton">LPC</button>
        </div>  
    );
}