
import './App.css';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import EmailVerification from './EmailVerification/EmailVerification';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/authContext';
import Homepage from './Homepage/Homepage';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
    
        <Routes>
          <Route path="/signup" element={user?<Navigate to='/home'/>:<Signup />} />
          <Route path="/login" element={user?<Navigate to='/home'/>:<Login />} />
          <Route path='/email-verification' element={<EmailVerification/>} />
          <Route path='/home' element={<Homepage/>} />
        </Routes>
      
    </div>
  );
}

export default App;
