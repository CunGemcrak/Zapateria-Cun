import { useDispatch, useSelector } from "react-redux";
import React, {useState, useEffect} from 'react'
import {Muestra_Cards_Empresa} from '../../../Redux/Actions/Empresa/Actions-Empresa'
import Loading from "../../loading/Loading";
import CompanyMenu from "../Company_Menu/CompanyMenu";
import NavFilter from "../../navFilter/navFilter";
import ZapatosCards from "../../Cards/Zapatos_card/Zapatos_Cards";

const CompanyStock = ()=>{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const empresa = useSelector((state) => state.EMPRESA || []);
    const cards = useSelector((state) => state.CARDS || []);
  
  


    

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); 
     
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [dispatch]);

      useEffect(() => {
     
        dispatch(Muestra_Cards_Empresa(empresa.id));
       }, [dispatch, empresa]);
     
   



    return<>
    {loading ? <Loading /> : null}
    <CompanyMenu className="nav-menu" />
    <div className="home-body">
    <NavFilter/>
    <div className="content-cards-empresa">
          <ZapatosCards />
        </div>
        </div>
    
    </>
}
export default CompanyStock