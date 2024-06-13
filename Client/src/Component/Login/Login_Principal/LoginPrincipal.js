import React, { useState } from 'react';

const LoginPrincipal = ({ registeredUsername }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos de inicio de sesión al servidor
    // Por ahora, simplemente imprimimos los datos en la consola y simulamos un inicio de sesión exitoso
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Simulamos un inicio de sesión exitoso
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Bienvenido, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          {registeredUsername && <p>¡Usuario {registeredUsername} registrado exitosamente!</p>}
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
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
};

export default LoginPrincipal;
