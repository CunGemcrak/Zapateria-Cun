
import React, { useState, useEffect} from "react"
import LoginUser from "../Login_User/Login_User";
import Loading from "../../loading/Loading";

import './LoginPrincipal.css'
import OlvideContrasena from "../../Olvidecontrasena/Olvidecontrasena";
import RegistrarUduario from "../Registrar_Usuario/Registrar_Usuario";
import RegistrarEmpresa from "../Login_Empresa/Registrar_Empresa";

const LoginPrincipal = ()=>{
  const [logueo, setLogueo] = useState("login");
  const [loading, setLoading] =useState(true)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLogueo("login")
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


        return (
          <div>
            {
              loading
              ?<Loading/>
              :null
            }
          
            <div className="BodyLogin">
              <div className="izquierdaGeneral">
                {
                  // <Carrucel className="carrucel" />
                }
              </div>
              <div className="derechaGeneral">
                {logueo === "login" && <LoginUser setView={setLogueo} />}
                {logueo === "recuperarkey" && <OlvideContrasena setView={setLogueo}/>}
                {logueo === "registro" && <RegistrarUduario setView={setLogueo} />}
                {logueo === "registroEm" && <RegistrarEmpresa setView={setLogueo} />}
                {/*logueo === "registroEmpresa" && <RegistrarseEmpresa setView={setLogueo} />}
                {logueo === "null" && <LoginInvitado setView={setLogueo} />*/}
              </div>
            </div>
          </div>
        );
      }

export default LoginPrincipal;