import React, { useState } from 'react';

import './Olvidecontrasena.css'

const OlvideContrasena = ({setView}) => {
  const [email, setEmail] = useState('');

 

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
        
        <div onClick={() => setView("login")}className="btn-Enviar">Enviar</div>
        <div onClick={()=>{setView('login')}} className='btn-regresar'>Regresar</div>
      </div>
    
    </div>
    
  );
};

export default OlvideContrasena;