import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaSignOutAlt, FaHome  } from 'react-icons/fa';
import './NavMenu.css';
import iconEstiloZap from '../loading/img/download.gif';
import { useDispatch } from "react-redux";

import {Salir_Usuario} from '../../Redux/Actions/Usuario/Action-user'

const NavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator =  useNavigate()
  const dispatch = useDispatch();

 
  const handlePerfil = () =>{
    navigator('/perfiluser')
  }
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const hondleSalir =()=>{
    dispatch(Salir_Usuario())
  }
const Hondlehome = () =>{
  navigator('/home')
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
        <div className="nav-item search-item">
          <div className="search-container">
            <FaSearch className="icon" />
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-item">
          <button className="logout-button">
            <FaHome className="icon" onClick={Hondlehome} />
          </button>
           
        </div>
        <div className="nav-item" >
          <div className="nav-link" onClick={handlePerfil} >
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
            <FaSignOutAlt className="icon" onClick={hondleSalir} />
          </button>
          FaHome 
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
