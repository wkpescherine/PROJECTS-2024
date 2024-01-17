import './App.css';
import {useNavigate} from 'react-router-dom'

function Create (){
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/dashboard')
    }

    return (
        <div>
            <p>Create account</p>
            <button  onClick={RedirectTo}>Create</button>
        </div>
    );
}

export default Create;