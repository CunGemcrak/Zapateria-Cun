import Loading from "../../loading/Loading";
import React, { useEffect, useState } from 'react';

import './CompanyHome.css';

import CompanyMenu from "../Company_Menu/CompanyMenu";
import CompanyDatos from "../Company_Datos/CompanyDatos";
//import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import NavFilter from "../../navFilter/navFilter";
//import ZapatosCard from "../../Cards/Zapatos_card/Zapatos_Card";

const CompanyHome = () => {
  const [loading, setLoading] = useState(true);
  const Empresa = useSelector((state) => state.EMPRESA);
  //const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



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
