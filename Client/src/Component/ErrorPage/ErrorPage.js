// src/ErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css'
import imgaenerror from './imgError/advertencia.png'
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="body-Error">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <img src={imgaenerror} alt='Error de pagina' className='imagein-error'/>
      <div className='btn-error' onClick={handleGoHome} >Ir a la página principal</div>
    </div>
  );
};

export default ErrorPage;
