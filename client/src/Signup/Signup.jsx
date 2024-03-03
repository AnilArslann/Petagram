import './Signup.sass';
import { Link,useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import { AuthContext } from '../Context/authContext';
import { Alert } from '@mui/material';
import InputBox from '../Components/InputBox/InputBox';
import AuthButton from '../Components/AuthButton/AuthButton';

function Signup() {
  const navigate = useNavigate();
    const {
      registerInfo,
      updateRegisterInfo,
      registerUser,
      registerError,
      isRegisterLoading,
      user
    } = useContext(AuthContext);
    useEffect(() => {
      if(user){
        setTimeout(()=>{
          navigate('/home');
  
        },500);
      }
    },[isRegisterLoading])
        
  return (
    <div className='fluid-container row'>
      <div className='col'>
        <p>iMAGE</p>
      </div>
      <div className='col signup-part'>
      <div className="logo">Petagram</div>
      <form onSubmit={registerUser} className='registerForm'>
        <InputBox type='text' text='Username' onChange={(e)=>{updateRegisterInfo({ ...registerInfo, username: e.target.value })}}></InputBox>
        <InputBox type='email' text='Email' onChange={(e)=>{updateRegisterInfo({ ...registerInfo, email: e.target.value })}}></InputBox>
        <InputBox type='password' text='Password' onChange={(e)=>{updateRegisterInfo({ ...registerInfo, password: e.target.value })}}></InputBox>
        <InputBox type='password' text='Confirm Password' onChange={(e)=>{updateRegisterInfo({ ...registerInfo, passwordConfirm: e.target.value })}}></InputBox>
        <AuthButton type="submit" isLoading={isRegisterLoading} text='Signup'/>
        {registerError?.error && (
                <Alert variant="danger">
                  <b>{`Error status code: ${registerError?.status}`}</b>
                  <p>{registerError?.message}</p>
                </Alert>
              )}
      </form>
      <div className="bottomPartSignup">
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  </div>
  );
}

export default Signup;