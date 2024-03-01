import React, { useState } from 'react';
import './Login.css'; // Importing the corresponding CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic for handling login
    console.log('Logging in with:', username, password);
  };

  const handleSignUp = () => {
    // Logic for handling sign up
    console.log('Signing up with:', username, password);
  };

  return (
    <div className="login-container">
      <div className="header">
        <h2>Login</h2>
      </div>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <button type="button" className="signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
