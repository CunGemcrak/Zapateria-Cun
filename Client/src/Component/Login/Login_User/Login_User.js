import React, { useState } from 'react';
import './Login.css'; // Importamos el archivo CSS para los estilos

const Login = () => {
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
    <div className="login-container">
      {loggedIn ? (
        <div>
          <h2>Bienvenido, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="login-form-container">
          <h2>Iniciar sesión</h2>
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
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="login-button">Iniciar sesión</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
