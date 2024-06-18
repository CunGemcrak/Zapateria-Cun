// src/perfiluser.js
import React, { useState } from 'react';
import './Diseño_admin.css'; // Importa el archivo de estilos CSS

const PerfilUser = () => {
  const [nombre, setNombre] = useState('Mateo Jimenez H');
  const [contraseña, setContraseña] = useState('********');
  const [género, setGénero] = useState('Masculino');
  const [correo, setCorreo] = useState('mateo@example.com');
  const [celular, setCelular] = useState('1234567890');
  const [imagen, setImagen] = useState('https://via.placeholder.com/150'); // Estado para la imagen

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleGéneroChange = (event) => {
    setGénero(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleCelularChange = (event) => {
    setCelular(event.target.value);
  };

  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagen(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-card">
      <img
        src={imagen}
        alt="Admin Profile"
        className="profile-image"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImagenChange}
        style={{ margin: '10px 0' }}
      />
      <h2 className="profile-name">{nombre}</h2>
      <p className="profile-role">Administrator</p>

      {/* Campos editables */}
      <div className="profile-details">
        <div className="profile-detail">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div className="profile-detail">
          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={handleContraseñaChange}
          />
        </div>
        <div className="profile-detail">
          <label>Género:</label>
          <input
            type="text"
            value={género}
            onChange={handleGéneroChange}
          />
        </div>
        <div className="profile-detail">
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={handleCorreoChange}
          />
        </div>
        <div className="profile-detail">
          <label>Celular:</label>
          <input
            type="text"
            value={celular}
            onChange={handleCelularChange}
          />
        </div>
      </div>

      {/* Acciones */}
      <div className="profile-actions">
        <button className="profile-button edit-button">Guardar Cambios</button>
        <button className="profile-button logout-button">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default PerfilUser;


