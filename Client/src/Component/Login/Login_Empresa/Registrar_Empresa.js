import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import "./Registrar_Empresa.css";
import imgUsuario from "../Login_User/img/iconos/usuario.png";
import imgCorreo from "../Login_User/img/iconos/gmail.png";
import imgClave from "../Login_User/img/iconos/contrasena.png";
import imgver from "../Login_User/img/iconos/ojo-con-pestanas-black.png";
import imgocultar from "../Login_User/img/iconos/cerrar-ojo-black.png";



import { Registrar_Empresa } from "../../../Redux/Actions/Empresa/Actions-Empresa"; 

const RegistrarEmpresa = ({ setView }) => {
    const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: "",
    mail: "",
    clave: "",
    rclave: "",
  });
  const [ver, setVer] = useState(false);
  const [errors, setErrors] = useState({});

  const HandleVer = () => {
    setVer(!ver);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validar mientras se escribe
    const validationErrors = validateUserData({ ...userData, [name]: value });
    setErrors(validationErrors);
  };

  const handleEnviarUser = () => {
    const validationErrors = validateUserData(userData);
    if (Object.keys(validationErrors).length === 0) {
      alert("Datos válidos, se puede enviar");
      alert(userData);
      const result = dispatch(Registrar_Empresa(userData))
      if(result){
        alert("Gurdado Satisfactoriamente ")
      }else{
        alert("No se guardo")
      }
      // Aquí puedes enviar los datos a través de una API o realizar otras operaciones
    } else {
      console.log("Datos inválidos, revisa los campos");
      setErrors(validationErrors);
    }
  };

  const validateUserData = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "El nombre es requerido";
    }else
    if (!data.mail.trim()) {
      errors.mail = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(data.mail)) {
      errors.mail = "El correo ingresado no es válido";
    }else
    if (!data.clave.trim()) {
      errors.clave = "La clave es requerida";
    }else
    if (!data.rclave.trim()) {
      errors.rclave = "Repetir la clave es requerido";
    } else if (data.clave !== data.rclave) {
      errors.rclave = "Las claves no coinciden";
    }
    return errors;
  };

  return (
    <div className="body-Empresa-register">
      <h1 className="Titulos">Registrar Empresa</h1>

      <div className="Register-container-input">
        <div className="input-group-empresa">
          <img src={imgUsuario} alt="Nombre Usuario" />
          <input
            name="name"
            placeholder="Nombre Propietario"
            type="text"
            value={userData.name}
            onChange={handleInputChange}
            className={errors.name ? "input-error" : ""}
          />
        </div>
       
      </div>

      <div className="Register-container-input">
        <div className="input-group-empresa">
          <img src={imgCorreo} alt="Correo Empresa" />
          <input
            name="mail"
            placeholder="Correo Empresa"
            type="text"
            value={userData.mail}
            onChange={handleInputChange}
            className={errors.mail ? "input-error" : ""}
          />
        </div>
       
      </div>

      <div className="Register-container-input">
        <div className="input-group-empresa">
          <img src={imgClave} alt="Clave" />
          <input
            name="clave"
            placeholder="Clave"
            type={ver ? "text" : "password"}
            value={userData.clave}
            onChange={handleInputChange}
            className={errors.clave ? "input-error" : ""}
          />
          <img
            src={ver ? imgver : imgocultar}
            alt="Mostrar/Ocultar Clave"
            onClick={HandleVer}
          />
        </div>
      
      </div>

      <div className="Register-container-input">
        <div className="input-group-empresa">
          <input
            name="rclave"
            
            placeholder="Repetir Clave"
            type={ver ? "text" : "password"}
            value={userData.rclave}
            onChange={handleInputChange}
            className={errors.rclave ? "input-error" : ""}
          />
        </div>
      
      </div>
        <div  className="error-message-general">
        <div className="error-message"> {errors.name}</div>
        <div className="error-message">{errors.mail}</div>
        <div className="error-message">{errors.clave}</div>
        <div className="error-message">{errors.rclave}</div>
        </div>
      <div className="btn-Enviar-empresa" onClick={handleEnviarUser}>
        Registrar
      </div>
      <div className="btn-Link-empresa" onClick={() => setView("login")}>
        Regresar
      </div>
    </div>
  );
};

export default RegistrarEmpresa;

