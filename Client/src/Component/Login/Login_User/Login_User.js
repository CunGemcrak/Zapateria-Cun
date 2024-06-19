import './Login_User.css'
import React, { useState } from 'react';
// Importamos los íconos de ojo abierto y cerrado
import icono_key from './img/iconos/contrasena.png'
import icono_ocultar from './img/iconos/cerrar-ojo-black.png'
import icono_ver from './img/iconos/ojo-con-pestanas-black.png'
import {useDispatch} from 'react-redux'
import { Buscar_User } from '../../../Redux/actions';

const LoginUser = ({ setView }) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keyVisible, setKeyVisible] = useState(true);

  const handleKey = () => {
    setKeyVisible(!keyVisible);
  };

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
    dispatch(Buscar_User(username, password))
  };

  return (
    <div className="body-Login">
      <div>
        <h1 className='Titulos'>Ingresar</h1>
        <div className='Login-container-input'>
          <div className="input-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              maxLength={100}
              placeholder="Celular/Correo"
            />
          </div>

          <div className="input-group">
            <img src={icono_key} alt="icono ingreso" />
            <input
              type={keyVisible ? 'password' : 'text'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              maxLength={15}
              placeholder="Contraseña"
            />
            <img
              src={keyVisible ? icono_ocultar : icono_ver}
              alt="Mostrar/Ocultar"
              onClick={handleKey}
              className="toggle-icon"  // Añadido
            />
          </div>
        </div>
      </div>
      <div onClick={() => setView("recuperarkey")} className='btn-Link espacios'>Olvidaste la contraseña</div>
      <div onClick={handleSubmit} className='btn-Enviar'>Iniciar sesión</div>
      <div onClick={() => setView("registro")} className='btn-Link espacios'>Registrar Usuario</div>
      <div onClick={() => setView("registroEm")} className='btn-Link espacios'>Registrar Zapateria</div>
    </div>
  );
};

export default LoginUser;
