import { BUSCARUSUARIO, SALIRCUENTAUSUARIO, GUARDARUSUARIO, CARDSUSUARIO}from'../../Action-Tipes-js/actions-type-usuario'
import axios from 'axios'
import {   setUser } from '../../../Component/Company/Company_Localstorang/Company_Localstorang';

//!Buscar un usuario 
export const Buscar_User = (correo, pass) => {
    return async (dispatch) => {
   
        
        try {
            
            const endpoint = `http://localhost:3001/user/${correo}/${pass}`; // Usamos los datos en la URL como parámetros de ruta
            const response = await axios.get(endpoint);
            const userData = response.data; 
            const userDatos = userData.datos
          
            
            console.log("Mensaje de respuesta: " + JSON.stringify(userDatos));

            setUser(userDatos)
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


//! Mostramos cards al usuario 
export const Muestra_Cards = () => {
    return async (dispatch) => {
      try {
        const endpoint = `http://localhost:3001/user/zapatos`; // Usamos los datos en la URL como parámetros de ruta
        const response = await axios.get(endpoint);
        const userData = response.data; 
  
        console.log("Mensaje de respuesta de las cards: " + JSON.stringify(userData));
      //  alert(userData.message )
        if (userData.message ==='No hay Stock' ) {
          dispatch({
            type: CARDSUSUARIO,
            payload: { name: false },
          });
        } else {
          dispatch({
            type: CARDSUSUARIO,
            payload: userData,
          });
        }
      } catch (error) {
        console.log("Error al enviar la información", error.message);
      }
    }
  }