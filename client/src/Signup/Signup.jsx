import './Signup.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/authContext';
import { Alert } from '@mui/material';

function Signup() {
    const {
      registerInfo,
      updateRegisterInfo,
      registerUser,
      registerError,
      isRegisterLoading,
    } = useContext(AuthContext);
        
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Username" onChange={(e)=>{updateRegisterInfo({ ...registerInfo, username: e.target.value })}} />
        <input type="email" placeholder="Email"  onChange={(e)=>{updateRegisterInfo({ ...registerInfo, email: e.target.value })}}/>
        <input type="password" placeholder="Password" onChange={(e)=>{updateRegisterInfo({ ...registerInfo, password: e.target.value })}}/>
        <input type="password" placeholder="Confirm Password" onChange={(e)=>{updateRegisterInfo({ ...registerInfo, passwordConfirm: e.target.value })}} />
        <button type="submit"> {isRegisterLoading ? "Creating your account..." : "Signup"}</button>
        {registerError?.error && (
                <Alert variant="danger">
                  <b>{`Error status code: ${registerError?.status}`}</b>
                  <p>{registerError?.message}</p>
                </Alert>
              )}
      </form>
      <Link to='/login'>Already Have an Account</Link>
    </div>
  );
}

export default Signup;