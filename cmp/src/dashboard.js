import './App.css';
import {useNavigate} from 'react-router-dom'

function Dashboard (){

    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/')
    }

    return (
        <div>

                <p>
                    <button onClick={RedirectTo}>Exit</button> 
                </p> 

        </div>  
    );
}

export default Dashboard;