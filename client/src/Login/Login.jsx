
import './Login.sass';
import { useContext,useState,useRef, useEffect } from 'react';
import { AuthContext } from '../Context/authContext';
import AuthButton from '../Components/AuthButton/AuthButton';
import { useNavigate } from 'react-router-dom';


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
    <div className='fluid-container row'>
      <div className='col'>
        <p>iMAGE</p>

      </div>
      <div className='col login-part'>
        <div className="logo">Petagram</div>
        <h1>Welcome to Petagram</h1>
        <form onSubmit={loginUser}>
          <input type="text" placeholder="Username" onChange={(e)=>{updateLoginInfo({ ...loginInfo, username: e.target.value })}}  value={loginInfo?.username}/>
          <input type="password" placeholder="Password"  onChange={(e)=>{updateLoginInfo({ ...loginInfo, password: e.target.value })}} value={loginInfo?.password}/>
          <AuthButton  type="submit" isLoading={isLoginLoading}/>
        </form>
      </div>
      
    </div>
  );
}

export default Login;