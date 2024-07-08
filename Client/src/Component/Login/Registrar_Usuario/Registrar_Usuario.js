import './Registrar_Usuario.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GuardrUsuario } from '../../../Redux/Actions/Usuario/Action-user';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.css';


const RegistrarUsuario = ({ setView }) => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState([]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({ ...formData, [name]: value });
    
    // Clear errors as the user types
    setErrors(errors.filter(error => !error.includes(name)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let validationErrors = [];

    if (!formData.firstName) validationErrors.push('El nombre es obligatorio');
    if (!formData.lastName) validationErrors.push('El apellido es obligatorio');
    if (!formData.email) {
      validationErrors.push('El email es obligatorio');
    } else if (!validateEmail(formData.email)) {
      validationErrors.push('El email no es válido');
    }
    if (!formData.password) validationErrors.push('La contraseña es obligatoria');

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form if validation passes
    const state = await dispatch(GuardrUsuario(formData));
    if(state ==="true"){
        alertify.alert("Guadado" , "Ahora puedes ingresar con tu usaurio y contraseña")  
        setView("login")  
    }else{
      alertify.alert("Error" , "Verifica tus datos usuario ya existe") 
    }
    
  };

  return (
    <div className="body-empresa-register">
      <div>
        <h2 className="Titulos">Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group-usuario">
            <label>
              Nombre:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group-usuario">
            <label>
              Apellido:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group-usuario">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group-usuario">
            <label>
              Contraseña:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error">{error}</p>
            ))}
          </div>
          <button type="submit" className="btn-Enviar">Registrarse</button>
        </form>
      </div>
      <div onClick={() => setView("login")} className="btn-Link">Ya tienes cuenta? Iniciar sesión</div>
    </div>
  );
};

export default RegistrarUsuario;
