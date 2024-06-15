import OlvideContrasena from "../../Olvidecontrasena/Olvidecontrasena";
import Loading from "../../loading/Loading";

import {useEffect, useState} from "react"

const LoginPrincipal = ()=>{
    
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
        Cargo la pagina
        <Loading/>
        <OlvideContrasena/>
        </>
)

}

export default LoginPrincipal;