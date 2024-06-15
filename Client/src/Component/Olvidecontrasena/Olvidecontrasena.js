import React, { useState } from 'react';

import './Olvidecontrasena.css'

const OlvideContrasena = ({setView}) => {
  const [email, setEmail] = useState('');

 

  return (
    <div>
      <h2>¿Olvidaste tu contraseña?</h2>
      <div >
        <label>
          Ingresa tu correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
        <div onClick={()=>{setView('login')}} className='btn-regresar'>Regresar</div>
      </div>
    </div>
  );
};

export default OlvideContrasena;