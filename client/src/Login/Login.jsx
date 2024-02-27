
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../Context/authContext';

function Login() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="text" placeholder="Username" onChange={(e)=>{updateLoginInfo({ ...loginInfo, username: e.target.value })}}  value={loginInfo?.username}/>
        <input type="password" placeholder="Password"  onChange={(e)=>{updateLoginInfo({ ...loginInfo, password: e.target.value })}} value={loginInfo?.password}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;