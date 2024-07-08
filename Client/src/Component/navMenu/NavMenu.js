import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt, FaHome, FaShoppingBag } from 'react-icons/fa';
import './NavMenu.css';
import iconEstiloZap from '../loading/img/download.gif';
import { useDispatch, useSelector } from "react-redux";

import { Salir_Usuario, Filr_Texto } from '../../Redux/Actions/Usuario/Action-user';

const NavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.CARDS);
  const filteredCards = useSelector((state) => state.filteredCards); // Estado para las tarjetas filtradas

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
    window.location.href = '/user/compras'; // Asegúrate de que esta ruta esté definida en tu aplicación
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    //alert(searchText)
    dispatch(Filr_Texto(searchValue));
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
            <FaSearch className="icon icon-search" />
            <input
              type="text"
              className="search-input"
              placeholder="Marca Preferida..."
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button" onClick={handleHome}>
            <FaHome className="icon icon-home" />
          </button>
        </div>
        <div className="nav-item">
          <div className="nav-link" onClick={handlePerfil}>
            <FaUser className="icon icon-user" />
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
            <FaShoppingCart className="icon icon-cart" />
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-link" onClick={handleVerCompras}>
            <FaShoppingBag className="icon icon-shoppingbag" />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button" onClick={handleSalir}>
            <FaSignOutAlt className="icon icon-logout" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
