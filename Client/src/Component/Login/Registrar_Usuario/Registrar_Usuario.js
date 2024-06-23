import './Registrar_Usuario.css'
import React, { useState } from 'react';
 
const RegistrarUduario = ({setView}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar la lógica para enviar los datos del formulario a tu backend o manejar el registro de usuario.
        console.log(formData); // Ejemplo: imprimir datos en consola
        // Aquí podrías hacer una llamada a tu API para registrar al usuario
      };
    
      return (
        <div>
          <h2>Registro de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Apellido:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Contraseña:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      );
    };
export default RegistrarUduario;