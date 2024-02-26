import './Signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }
        axios.post('http://localhost:3000/signup', {username, password,email})
        .then((res)=>{
            console.log('Register Response: ', res);
        }
        )
        .catch((err)=>{
            console.log('Register Error: ', err);
        }
        )

    }
        
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="password" placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        <button type="submit">Signup</button>
      </form>
      <Link to='/login'>Already Have an Account</Link>
    </div>
  );
}

export default Signup;