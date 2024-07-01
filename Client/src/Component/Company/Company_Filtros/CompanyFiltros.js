import { useDispatch, useSelector } from "react-redux";
import React, {useState, useEffect} from 'react'
import {Muestra_Cards} from '../../../Redux/Actions/Empresa/Actions-Empresa'
import Loading from "../../loading/Loading";
import CompanyMenu from "../Company_Menu/CompanyMenu";

const CompanyStock = ()=>{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const empresa = useSelector((state) => state.EMPRESA || []);
    
    const cards = useSelector((state) => state.CARDS) || [];
  
    useEffect(() => {
    //  dispatch(Muestra_Cards(empresa.id));
    }, [dispatch, empresa]);
  



    

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
      //   alert(JSON.stringify(getEmpresa()))
          
     
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [dispatch]);
    return<>
    {loading ? <Loading /> : null}
    
    
    </>
}
export default CompanyStock