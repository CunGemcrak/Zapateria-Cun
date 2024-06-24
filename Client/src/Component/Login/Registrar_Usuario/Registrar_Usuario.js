import './Registrar_Usuario.css'
import React, { useState } from 'react';


import {GuardrUsuario } from '../../../Redux/Actions/Usuario/Action-user'
import { useDispatch } from 'react-redux';

 
const RegistrarUduario = ({setView}) => {
  const dispatch = useDispatch()
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
         console.log(formData); 
     
      };

      const HandleGuardar = () =>{
        dispatch(GuardrUsuario(formData))
      }
    
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
            <div onClick={HandleGuardar} className='btn-Enviar'>Registrarse</div>
          </form>
        </div>
      );
    };
export default RegistrarUduario;