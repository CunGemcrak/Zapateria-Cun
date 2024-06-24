import { BUSCARUSUARIO, SALIRCUENTAUSUARIO, GUARDARUSUARIO}from'../../Action-Tipes-js/actions-type-usuario'
import axios from 'axios'


//!Buscar un usuario 
export const Buscar_User = (correo, pass) => {
    return async (dispatch) => {
       //alert("Mensaje de respuesta: " + JSON.stringify(correo, pass));
        
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

//!Cerrar la cuenta
export const Salir_Usuario = ()=>{
    return async(dispatch)  =>{
       
        dispatch({
            type: SALIRCUENTAUSUARIO,
            payload: "false"
        })
    }

}

//!Crear Usuario 
export const GuardrUsuario = (userDatas) =>{
    return async (dispatch) => {


        try {
            const datos = {
                name: userDatas.firstName, 
                apell: userDatas.lastName, 
                correo: userDatas.email, 
                password: userDatas.password
            }
            const endpoint = `http://localhost:3001/user/create`; // Usamos los datos en la URL como parámetros de ruta
            const response = await axios.post(endpoint, datos);
            const userData = response.data; 
           
          

            console.log("Mensaje de respuesta: " + JSON.stringify(userData));


            dispatch({
                type: GUARDARUSUARIO,
                payload: userData,
            });
      
        } catch (error) {
            console.log("Error al enviar la información", error.message);
        }
    }
}