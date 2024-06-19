import { BUSCARUSUARIO } from "./action-types"
import axios from 'axios'


//Registramos usuario 
export const Buscar_User = (correo, pass) => {
    return async (dispatch) => {
        try {
            const endpoint = `http://localhost:3001/user/${correo}/${pass}`; // Usamos los datos en la URL como parámetros de ruta
            const response = await axios.get(endpoint);
            const userData = response.data; 
            const  user = userData.data

            console.log("Mensaje de respuesta: " + JSON.stringify(user));
            dispatch({
                type: BUSCARUSUARIO,
                payload: user,
            });
      
        } catch (error) {
            console.log("Error al enviar la información", error.message);
        }
    };

}