import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/api-keys', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);

      navigate('/trips'); 
    } catch (error) {
      setError('Credenciales inválidas. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label>Correo Electrónico</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLogin}>Iniciar Sesión</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
