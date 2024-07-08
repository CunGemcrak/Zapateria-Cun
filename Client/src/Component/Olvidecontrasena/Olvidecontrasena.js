import React, { useState } from 'react';

import './Olvidecontrasena.css'


import {Verificar_Clave} from '../../Redux/Actions/Usuario/Action-user'

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.css';
import { useDispatch } from 'react-redux';

const OlvideContrasena = ({setView}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()

  const validateEmail = (email) => {
    // Regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const hondleEnviarClaveUser = async () => {
    if (!validateEmail(email)) {
      alertify.alert('Error','Por favor ingresa un correo electrónico válido.');
      return;
    }

    const dato = await dispatch(Verificar_Clave(email))
    alert(dato)
    if(dato === true){
      alertify.alert('Correo Enviado', 'Revisa tu correo vandeja de entrada o SPAM')
    }else{
      alertify.alert('Error', 'Correo no registrado')
    }
   
  };

  return (
    
    <div className="body-olvide-contrasena">
      <h1 className="Titulos">¿Olvidaste tu contraseña?</h1>
          
      <div className='label'>
        <label>
          Ingresa tu correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <div onClick={hondleEnviarClaveUser}className="btn-Enviar">Enviar</div>
        <div onClick={()=>{setView('login')}} className='btn-regresar'>Regresar</div>
      </div>
    
    </div>
    
  );
};

export default OlvideContrasena;