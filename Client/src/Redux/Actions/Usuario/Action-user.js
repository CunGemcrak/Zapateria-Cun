import { BUSCARUSUARIO }from'../../Action-Tipes-js/actions-type-usuario'
import axios from 'axios'


//Registramos usuario 
export const Buscar_User = (correo, pass) => {
    return async (dispatch) => {
        //console.log("Mensaje de respuesta: " + JSON.stringify(correo, pass));
        
        try {
            const endpoint = `http://localhost:3001/user/${correo}/${pass}`; // Usamos los datos en la URL como parámetros de ruta
            const response = await axios.get(endpoint);
            const userData = response.data; 
            const userDatos = userData.datos
         

            console.log("Mensaje de respuesta: " + JSON.stringify(userDatos));
            dispatch({
                type: BUSCARUSUARIO,
                payload: userDatos,
            });
      
        } catch (error) {
            console.log("Error al enviar la información", error.message);
        }
    };

}