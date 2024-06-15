import React, { useState } from 'react';

const OlvideContrasena = () => {
  const [email, setEmail] = useState('');

 
const handleSubmit = () => {
  alert ("este es una prueba")
}
  return (
    <div>
      <h2>¿Olvidaste tu contraseña?</h2>
      <form onClick={handleSubmit}>
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
      </form>
    </div>
  );
};

export default OlvideContrasena;