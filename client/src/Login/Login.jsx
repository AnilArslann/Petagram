
import './Login.sass';
import { useContext,useState,useRef, useEffect } from 'react';
import { AuthContext } from '../Context/authContext';
import AuthButton from '../Components/AuthButton/AuthButton';
import { useNavigate } from 'react-router-dom';
import InputBox from '../Components/InputBox/InputBox';
import SignWithGoogle from '../Components/SignWithGoogle/SignWithGoogle';


function Login() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading,user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  let [loading, isloading] = useState(false);
  useEffect(() => {
    if(user){
      setTimeout(()=>{
        navigate('/home');

      },500);
    }
  },[isLoginLoading])



  return (
    <div className='fluid-container row w-100'>
      <div className='col'>
        <p>iMAGE</p>

      </div>
      <div className='col login-part '>
        <div className="logo">Petagram</div>
        <form onSubmit={loginUser} className='loginForm'>
          <InputBox type='text' text='Username' onChange={(e)=>{updateLoginInfo({ ...loginInfo, username: e.target.value })}}  value={loginInfo?.username}></InputBox>
          <InputBox type='password' text='Password' onChange={(e)=>{updateLoginInfo({ ...loginInfo, password: e.target.value })}} value={loginInfo?.password}></InputBox>
          <AuthButton  type="submit" isLoading={isLoginLoading} text='Login'/>
          <h6>or</h6>
         
        </form>

      
      <div className="bottomPartLogin">
        
        <SignWithGoogle></SignWithGoogle>
        <p>Don't have an account? <a href='/signup'>Sign up</a></p>

      </div>
      </div>
      
    </div>
  );
}

export default Login;