import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './NavMenu.css';
import iconEstiloZap from '../loading/img/download.gif';

const NavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator =  useNavigate()

  const handleMenuUserEnter = () => {
    
    if(menuOpen){
      navigator('/perfiluser')
    }else{
      setShowSubMenu(!showSubMenu);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
          <div className="nav-link" onClick={handleMenuUserEnter}>
            <FaUser className="icon" />
          </div>
          {
            menuOpen
            ?
          showSubMenu && (
            <div className="submenu">
              <div className="nav-link" >Perfil del Usuario</div>
              <div className="nav-link">Mis Compras</div>
            </div>
          )
          :null
        }
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <FaShoppingCart className="icon" />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button">
            <FaSignOutAlt className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
