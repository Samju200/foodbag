import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

function Login() {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithRedirect({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
