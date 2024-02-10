import './App.css';
import {useNavigate} from 'react-router-dom'

function Create (){
    let navigate = useNavigate();

    function RedirectTo(){
        navigate('/dashboard')
    }

    function RedirectToMain(){
        navigate('/')
    }

    return (
        <div>
            <p>Create account</p>
            <button  onClick={RedirectTo}>Create</button>
            <button  onClick={RedirectToMain}>Exit</button>
        </div>
    );
}

export default Create;