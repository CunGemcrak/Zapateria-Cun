import axios from "axios";
import { BUSCAREMPRESA } from "../../Action-Tipes-js/actions-type-empresa";

export const Registrar_Empresa = (userData) => {
  return async (dispatch) => {
    try {
      const datos = {
        name: userData.name,
        Descripcion: "",
        celular: "",
        correo: userData.mail,
        password: userData.clave,
        url: "",
      };

      const endpoint = `http://localhost:3001/crear/empresa`;
      const response = await axios.post(endpoint, datos);
      const resp = response.data;

      console.log("Respuesta del servidor:", resp);

      return resp; // Devuelve la respuesta del servidor en lugar de userData
    } catch (error) {
      console.log("Error al enviar la información:", error.message);
      // Manejar el error devolviendo un objeto con el error
      return { error: "Error al enviar la información" };
    }
  };
};

//! Login empresa



export const Buscar_Empresa = (correo, pass)=>{
  return async (dispatch) => {
   // alert("Entro al metodo" + correo +" pass : " +pass )
    try {
        const endpoint = `http://localhost:3001/empresa/${correo}/${pass}`; // Usamos los datos en la URL como parámetros de ruta
        const response = await axios.get(endpoint);
        const userData = response.data;
      //  const  user = userData.data

        console.log("Mensaje de respuesta: " + JSON.stringify(userData));
        dispatch({
            type: BUSCAREMPRESA,
            payload: userData.usuario,
        });
  
    } catch (error) {
        console.log("Error al enviar la información", error.message);
    }
};
}
