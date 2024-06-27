import Loading from "../../loading/Loading";
import React, { useEffect, useState } from 'react';

import './CompanyHome.css';

import CompanyMenu from "../Company_Menu/CompanyMenu";
import CompanyDatos from "../Company_Datos/CompanyDatos";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";

//import NavFilter from "../../navFilter/navFilter";
//import ZapatosCard from "../../Cards/Zapatos_card/Zapatos_Card";

import {Busqueda_Color, Busqueda_Tallas, Busqueda_Marca} from '../../../Redux/Actions/Empresa/Actions-Empresa'

const CompanyHome = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  //const Empresa = useSelector((state) => state.EMPRESA);
  //const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(Busqueda_Color())
      dispatch(Busqueda_Tallas())
      dispatch(Busqueda_Marca())
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);



  return (
    <div className="home-container">
      {loading ? <Loading /> : null}
      <CompanyMenu className="nav-menu" />
      <div className="home-body">
        <div className="content-cards">
          {/* Aquí iría el contenido principal de la página */}
          <CompanyDatos/>
      
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;
