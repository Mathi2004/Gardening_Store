import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { colors } from '@mui/material';

function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const[cred, setCred] = useState([]);
  let navigate = useNavigate('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   let canLog = false;
  const handleSubmit = (e) => {
     
                navigate('/Main')
       
    }
    

  return (
    <div >
      <div className='login'>
        <div className='login-container'style={{ background: ' rgba(0, 0, 0, 0.26)' }}>
        <h1 style={{ color: 'white' ,background:'rgba(0, 0, 0, 0.18)'}}>Welcome to Gardening Store !</h1>
          <div className='login-form'>
            <h1 style={{ color: 'white' ,background:'rgba(0, 0, 0, 0.18)'}}> Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='logincred'
                  placeholder='Username'
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required/>
              </div>
              <div >
                <input
                  className='logincred'
                  placeholder='Password'
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required/>
              </div>
              <div>
              <button className='but' type="submit" style={{  color: 'white' ,background:'rgba(0, 0, 0, 0.10)'}}>Submit</button>

              </div>
            </form>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login;