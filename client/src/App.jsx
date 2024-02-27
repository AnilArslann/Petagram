
import './App.css';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import EmailVerification from './EmailVerification/EmailVerification';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/authContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
    
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={user?<Navigate to='/email-verification'/>:<Login />} />
          <Route path='/email-verification' element={<EmailVerification/>} />
        </Routes>
      
    </div>
  );
}

export default App;
