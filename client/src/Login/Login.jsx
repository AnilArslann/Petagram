import axios from 'axios';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        console.log('Login Request: ', {username, password});
        axios.post('http://localhost:3000/api/user/login', {username, password})
        .then((res)=>{
            console.log('Login Response: ', res);
            navigate('/home')
        }
        )
        .catch((err)=>{
            console.log('Login Error: ', err);
        }
        )
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;