import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaBuilding, FaPlusSquare, FaCheckCircle } from 'react-icons/fa';
import './CompanyMenu.css';
import iconEstiloZap from '../../loading/img/download.gif';

const CompanyMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator = useNavigate();

  const handlePerfil = () => {
    navigator('/company');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const hondleSalir = () => {
    // dispatch(Salir_Usuario())
  };

const handleZapatos = () =>{
  navigator('/company/zapatos')
}

const handleVenta =()=>{
  navigator('/company/ventas')
}

  return (
    <nav className="navbar">
      <div className="icon-zap">
        <img src={iconEstiloZap} alt="Este es el icono" className="iamgen-icon" />
      </div>

      <div className="hamburger-icon" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <div className="nav-item">
          <div className="nav-link" onClick={handlePerfil}>
            <FaBuilding className="icon" />
            <span className="icon-label">Perfil</span>
          </div>
        </div>

        <div className="nav-item">
          <div className="nav-link" onClick={handleZapatos}>
            <FaPlusSquare className="icon" />
            <span className="icon-label">zapatos</span>
          </div>
        </div>

        <div className="nav-item">
          <div className="nav-link" onClick={handleVenta}>
            <FaCheckCircle className="icon" />
            <span className="icon-label">ventras</span>
          </div>
        </div>

        <div className="nav-item">
          <button className="logout-button">
            <FaSignOutAlt className="icon" onClick={hondleSalir} />
            <span className="icon-label">Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CompanyMenu;
