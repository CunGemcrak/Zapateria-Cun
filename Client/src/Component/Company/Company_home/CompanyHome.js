import Loading from "../../loading/Loading";
import React, { useEffect, useState } from 'react';

import './CompanyHome.css';

import CompanyMenu from "../Company_Menu/CompanyMenu";
import CompanyDatos from "../Company_Datos/CompanyDatos";
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";

//import NavFilter from "../../navFilter/navFilter";
//import ZapatosCard from "../../Cards/Zapatos_card/Zapatos_Card";

import {Busqueda_Color, Busqueda_Tallas, Busqueda_Marca, Buscueda_Calidad, Buscar_Categoria, Historial_Local} from '../../../Redux/Actions/Empresa/Actions-Empresa'



import {  
  getColores, getTallas, getMarcas, getEmpresa
 } from "../Company_Localstorang/Company_Localstorang";

const CompanyHome = () => {
  const [loading, setLoading] = useState(true);
 // const colores = useSelector((state) => state.COLORES || []);
  const empresa = useSelector((state) => state.EMPRESA || []);
 /* const tallas = useSelector((state) => state.TALLAS || []);
  const marcas = useSelector((state) => state.MARCAS || []);
  const calidad = useSelector((state) =>state.CALIDAD || [])
  const categorias = useSelector((state)=>state.CATEGORIAS || [])*/
  const dispatch = useDispatch()
  //const Empresa = useSelector((state) => state.EMPRESA);
  //const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(Busqueda_Color())
      dispatch(Busqueda_Tallas())
      dispatch(Buscueda_Calidad())
      dispatch(Busqueda_Marca())
      dispatch(Buscueda_Calidad())
      dispatch(Buscar_Categoria())
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

useEffect(()=>{
if(empresa.status === 'false'  ){
     dispatch(Historial_Local(getColores(), getTallas(), getMarcas(), getEmpresa()))
}
 
  
},[dispatch, empresa])

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
