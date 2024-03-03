
import './Login.sass';
import { useContext,useState,useRef, useEffect } from 'react';
import { AuthContext } from '../Context/authContext';
import AuthButton from '../Components/AuthButton/AuthButton';
import { useNavigate } from 'react-router-dom';
import InputBox from '../Components/InputBox/InputBox';
import SignWithGoogle from '../Components/SignWithGoogle/SignWithGoogle';
import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import { postRequest,baseUrl } from '../utils/service';


function Login() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading,user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  let [mail,setMail]=useState('');
  let [google,setgoogle]=useState({});
  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setgoogle(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});
  useEffect(() => {
    if(user){
      setTimeout(()=>{
        navigate('/home');

      },500);
    }
  },[isLoginLoading]);

  useEffect(
    () => {
        if (google) {
            console.log('Google token is ', google.access_token);
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${google.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${google.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setMail(res.data.email);

                })
                .catch((err) => console.log(err));
        }
    },
    [ google ]
);
useEffect(()=>{
  if(mail&&mail!=''){
    const fetchData=async()=>{
      let res=await postRequest(`${baseUrl}/user/mail`,JSON.stringify({email:mail}));
      if(res){
        localStorage.setItem('User',JSON.stringify(res));
        navigate('/home');
      }
      else{
        navigate('/signup');
    }

  
    }
    fetchData();
  }},[mail]);



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
        
        <SignWithGoogle onClick={loginGoogle}></SignWithGoogle>
        <p>Don't have an account? <a href='/signup'>Sign up</a></p>

      </div>
      </div>
      
    </div>
  );
}

export default Login;