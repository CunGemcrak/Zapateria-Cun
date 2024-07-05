import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt, FaHome, FaShoppingBag } from 'react-icons/fa'; // Importar el icono
import './NavMenu.css';
import iconEstiloZap from '../loading/img/download.gif';
import { useDispatch } from "react-redux";

import {Salir_Usuario} from '../../Redux/Actions/Usuario/Action-user'

const NavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCarrito = () => {
    navigate('/user/carrito');
  };

  const handlePerfil = () => {
    navigate('/perfiluser');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSalir = () => {
    dispatch(Salir_Usuario());
    navigate('/');
  };

  const handleHome = () => {
    navigate('/home');
  };

  const handleVerCompras = () => {
    window.location.href = '/user/compras';// Asegúrate de que esta ruta esté definida en tu aplicación
    
  };

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
        <div className="nav-item search-item">
          <div className="search-container">
            <FaSearch className="icon" />
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button" onClick={handleHome}>
            <FaHome className="icon" />
          </button>
        </div>
        <div className="nav-item">
          <div className="nav-link" onClick={handlePerfil}>
            <FaUser className="icon" />
          </div>
          {menuOpen && showSubMenu && (
            <div className="submenu">
              <div className="nav-link">Perfil del Usuario</div>
              <div className="nav-link">Mis Compras</div>
            </div>
          )}
        </div>
        <div className="nav-item">
          <div className="nav-link" onClick={handleCarrito}>
            <FaShoppingCart className="icon" />
          </div>
        </div>
        <div className="nav-item"> {/* Nuevo ítem de menú para ver compras */}
          <div className="nav-link" onClick={handleVerCompras}>
            <FaShoppingBag className="icon" />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button" onClick={handleSalir}>
            <FaSignOutAlt className="icon" />
          </button>
        </div>
        
      </div>
    </nav>
  );
}

export default NavMenu;
