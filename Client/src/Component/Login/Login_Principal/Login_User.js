import {useEffect, useState} from "react"
import './LoginPrincipal.css'

import { useEffect, useState } from "react";
import './LoginPrincipal.css';
import Loading from "../../loading/Loading";
import LoginUser from "../Login_User/Login_User";

const LoginPrincipal = () => {
  const [logueo, setLogueo] = useState("login"); // Cambiado de "flase" a "login" para probar
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

const LoginPrincipal = ()=>{
  const [logueo, setLogueo] = useState("login");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

      return( 
        <>
        {
            loading && <Loading/>
            
        }
     
        <div className="BodyLogin">
        <div className="izquierdaGeneral">
        {
         // <Carrucel className="carrucel" />
        }  
        </div>
        <div className="derechaGeneral">
          {logueo === "login" && <LoginUser setView={setLogueo} />}
          {/*logueo === "recuperarkey" && <Recuperarkey setView={setLogueo} />}
          {logueo === "registro" && <Registrarse setView={setLogueo} />}
          {logueo === "registroEmpresa" && <RegistrarseEmpresa setView={setLogueo} />}
          {logueo === "null" && <LoginInvitado setView={setLogueo} />*/}
        </div>
      </div>
       
        </>
)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        loading 
          ? <Loading />
          : (
            <div className="BodyLogin">
              <div className="izquierdaGeneral">
                {/* <Carrucel className="carrucel" /> */}
              </div>
              <div className="derechaGeneral">
                {logueo === "login" && <LoginUser setView={setLogueo} />}
                {/* 
                {logueo === "recuperarkey" && <Recuperarkey setView={setLogueo} />}
                {logueo === "registro" && <Registrarse setView={setLogueo} />}
                {logueo === "registroEmpresa" && <RegistrarseEmpresa setView={setLogueo} />}
                {logueo === "null" && <LoginInvitado setView={setLogueo} />} 
                */}
              </div>
            </div>
          )
      }
    </>
  );
}

export default LoginPrincipal;