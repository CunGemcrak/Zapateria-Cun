import './Login_User.css'
import React, { useState, useEffect } from 'react';
import icono_key from './img/iconos/contrasena.png'
import icono_ocultar from './img/iconos/cerrar-ojo-black.png'
import icono_ver from './img/iconos/ojo-con-pestanas-black.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Buscar_User } from "../../../Redux/Actions/Usuario/Action-user"
import { Buscar_Empresa } from '../../../Redux/Actions/Empresa/Actions-Empresa';

const LoginUser = ({ setView }) => {
  const User = useSelector((state)=>state.USER)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keyVisible, setKeyVisible] = useState(true);
  const [tipeuser, setTipeUser] = useState("usuario")

  const handleKey = () => {
    setKeyVisible(!keyVisible);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTipoUsuarioChange = (event) => {
    setTipeUser(event.target.value);
   // alert(event.target.value)
  };
  useEffect(() => {
    if (!User) {
      navigate('/home');
    }
  }, [navigate, User]);

  const handleEnviarUser = (event) => {
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Tipo de usuario:', tipeuser);
    if(tipeuser ==="usuario"){
      dispatch(Buscar_User(username, password))

      navigate('/home')
    }else
    if(tipeuser === "tienda"){
      dispatch(Buscar_Empresa(username, password))
      //navigate('/tienda')
    }else{
      alert("Debes seleccionar un usuario")
    }
    
    
  };

  return (
    <div className="body-Login">
      <div>
        <h1 className='Titulos'>Ingresar</h1>
        <div className="input-group-checked">
          <label>
            <input
              type="radio"
              name="tipoUsuario"
              value="usuario"
              checked={tipeuser === "usuario"}
              onChange={handleTipoUsuarioChange}
            /> Usuario
          </label>
          <label>
            <input
              type="radio"
              name="tipoUsuario"
              value="tienda"
              checked={tipeuser === "tienda"}
              onChange={handleTipoUsuarioChange}
            /> Tienda
          </label>
        </div>
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
              className="toggle-icon"  
            />
          </div>
        </div>
      </div>
      <div onClick={() => setView("recuperarkey")} className='btn-Link espacios'>Olvidaste la contraseña</div>
      <div onClick={handleEnviarUser} className='btn-Enviar'>Iniciar sesión</div>
      <div onClick={() => setView("registro")} className='btn-Link espacios'>Registrar Usuario</div>
      <div onClick={() => setView("registroEm")} className='btn-Link espacios'>Registrar Zapateria</div>
    </div>
  );
};

export default LoginUser;
