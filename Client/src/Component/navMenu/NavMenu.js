import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './NavMenu.css';

import iconEstiloZap from '../loading/img/download.gif'

const NavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMenuUserEnter = () => {
    setShowSubMenu(!showSubMenu);
  };



  return (
    <nav className="navbar">
      <div className='icon-zap' ><img src={iconEstiloZap} alt='Este es el icono' className='iamgen-icon'/></div>
      
      <div className="nav-list">
        <div className="nav-item">
          <div className="nav-link active">Home</div>
        </div>
        <div className="nav-item">
          <div className="nav-link">Link 1</div>
        </div>
        <div className="nav-item">
          <div className="nav-link">Link 2</div>
        </div>
        <div className="nav-item search-item">
          <div className="search-container">
            <FaSearch className="icon" />
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-item" >
          <div className="nav-link" >
            <FaUser className="icon" onClick={handleMenuUserEnter}/>
          </div>
          {showSubMenu && (
            <div className="submenu">
              <div className='nav-link'>Perfil del Usuario</div>
              <div className='nav-link'>Mis Compras</div>
              
            </div>
          )}
        </div>
        <div className="nav-item">
          <div className="nav-link"> {/* Puedes agregar un onClick aquí si necesitas */}
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
