import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaBuilding, FaPlusSquare, FaCheckCircle, FaListAlt  } from 'react-icons/fa';
import './CompanyMenu.css';
import iconEstiloZap from '../../loading/img/download.gif';

import { getEmpresa, removeEmpresa } from '../Company_Localstorang/Company_Localstorang';


import {LogalstorangEmpresa, Busqueda_Color, Busqueda_Tallas, Buscueda_Calidad, Busqueda_Marca, Buscar_Categoria} from '../../../Redux/Actions/Empresa/Actions-Empresa'
import { useDispatch, useSelector } from 'react-redux';

const CompanyMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const emrpesa = useSelector((state)=>state.EMPRESA || [])
  const navigator = useNavigate();

  const dispatch = useDispatch()




  useEffect(() => {
    const storedUser = getEmpresa();
    if (!emrpesa || emrpesa.status === "false") {
      if (!storedUser || storedUser.status === "false") {
        navigator('/');
      } else {
      //  dispatch(Buscar_Orders_Users(storedUser.id));
        dispatch(LogalstorangEmpresa(storedUser));
        dispatch(Busqueda_Color())
        dispatch(Busqueda_Tallas())
        dispatch(Buscueda_Calidad())
        dispatch(Busqueda_Marca())
        dispatch(Buscueda_Calidad())
        dispatch(Buscar_Categoria())
      }
    } 
  }, [navigator, emrpesa, dispatch]);



  const handlePerfil = () => {
    navigator('/company');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const hondleSalir = () => {
  
    removeEmpresa()
    navigator('/');
  };

const handleZapatos = () =>{
  navigator('/company/zapatos')
}

const handleVenta =()=>{
  navigator('/company/ventas')
}

const handleStock = () =>{
  navigator('/company/stock')
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
          <div className="nav-link" onClick={handleStock}>
            <FaListAlt  className="icon" />
            <span className="icon-label">stock</span>
          </div>
        </div>

        <div className="nav-item">
          <div className="nav-link" onClick={handleVenta}>
            <FaCheckCircle className="icon" />
            <span className="icon-label">ventras</span>
          </div>
        </div>
        <div className="nav-item" onClick={hondleSalir} >
          <button className="logout-button" >
            <FaSignOutAlt className="icon" />
            <span className="icon-label">Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CompanyMenu;
