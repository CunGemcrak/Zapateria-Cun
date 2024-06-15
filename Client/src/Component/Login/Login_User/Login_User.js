import './Login_User.css'
import React, { useState } from 'react';
// Importamos los íconos de ojo abierto y cerrado

const LoginUser = ({setView}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type={ 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>ingresar</button>
      </div>
      <button type="submit">Iniciar sesión</button>
      <div onClick={() => setView("recuperarkey")} className='btn-regresar'>olvidaste la contraseña</div>
      <div onClick={() => setView("registro")} className='btn-regresar'>Registrar Usuario</div>
    </form>
  );
};

export default LoginUser;
