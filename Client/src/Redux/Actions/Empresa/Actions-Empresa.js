import axios from "axios";
import { BUSCAREMPRESA,
  BUSCARCOLORES,//! buscamos colores
  BUSCARTALLA,//! buscamos tallas
  BUSCARMARCA,//! Buscamos Marcas
  BUSCARCATEGORIAS,//!Buscar Categorias
  BUSCARCALIDAD,//! Buscar Calidad
  CARDSEMPRESA,
 } from "../../Action-Tipes-js/actions-type-empresa";

 import { setEmpresa, getEmpresa } from "../../../Component/Company/Company_Localstorang/Company_Localstorang";

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

//      console.log("Respuesta del servidor:", resp);

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
      setEmpresa(userData.usuario)
    //    console.log("Mensaje de respuesta: " + JSON.stringify(userData));
        dispatch({
            type: BUSCAREMPRESA,
            payload: userData.usuario,
        });
  
    } catch (error) {
        console.log("Error al enviar la información", error.message);
    }
};
}

//! Modificar Empresa

export const Actualizar_Datos_Company = (datos, id)=>{
  return async (dispatch) => {
     alert("datos id: " + JSON.stringify(id) )
     try {
         const endpoint = `http://localhost:3001/empresa/update/${id}`; // Usamos los datos en la URL como parámetros de ruta
         const response = await axios.put(endpoint, datos );
         const userData = response.data;
     return userData;
   
     } catch (error) {
         console.log("Error al enviar la información", error.message);
     }
 };
}

//!Buscamos espacio apra manipular colores 
export const Busqueda_Color = ()=>{
  return async (dispatch) => {
    // alert("Entro al metodo" + correo +" pass : " +pass )
     try {
         const endpoint = `http://localhost:3001/empresa/color/`; // Usamos los datos en la URL como parámetros de ruta
         const response = await axios.get(endpoint);
         const userData = response.data;
       //  const  user = userData.data
 
    //     console.log("Mensaje de respuesta: " + JSON.stringify(userData));
         dispatch({
             type: BUSCARCOLORES,
             payload: userData.colores,
         });
   
     } catch (error) {
         console.log("Error al enviar la información", error.message);
     }
 };
}

export const Busqueda_Tallas = ()=>{
  return async (dispatch) => {
    // alert("Entro al metodo" + correo +" pass : " +pass )
     try {
         const endpoint = `http://localhost:3001/empresa/tallas/`; // Usamos los datos en la URL como parámetros de ruta
         const response = await axios.get(endpoint);
         const userData = response.data;
       //  const  user = userData.data
 
   //      console.log("Mensaje de respuesta: " + JSON.stringify(userData));
         dispatch({
             type: BUSCARTALLA,
             payload: userData.tallas,
         });
   
     } catch (error) {
         console.log("Error al enviar la información", error.message);
     }
 };
}

export const Busqueda_Marca =() =>{
  return async (dispatch) => {
    // alert("Entro al metodo" + correo +" pass : " +pass )
     try {
         const endpoint = `http://localhost:3001/empresa/marcas`; // Usamos los datos en la URL como parámetros de ruta
         const response = await axios.get(endpoint);
         const userData = response.data;
       //  const  user = userData.data
 
    //     console.log("Mensaje de respuesta: " + JSON.stringify(userData));
         dispatch({
             type: BUSCARMARCA,
             payload: userData.marcas,
         });
   
     } catch (error) {
         console.log("Error al enviar la información", error.message);
     }
 };
}

export const Buscueda_Calidad = ()=>{
  return async (dispatch) => {  
    try {
      const endpoint = `http://localhost:3001/empresa/calidad`; // Usamos los datos en la URL como parámetros de ruta
      const response = await axios.get(endpoint);
      const userData = response.data;
    //  const  user = userData.data

     console.log("Mensaje de respuesta: CAlidad" + JSON.stringify(userData));
     
     
      dispatch({
          type: BUSCARCALIDAD,
          payload: userData.calidad,
      });
    } catch (error) {
      console.log("error al buscar el usuario")
    }

  }
}


export const Buscar_Categoria = ()=>{
  return async (dispatch) => {  
    try {
      const endpoint = `http://localhost:3001/empresa/categorias`; // Usamos los datos en la URL como parámetros de ruta
      const response = await axios.get(endpoint);
      const userData = response.data;
    //  const  user = userData.data

      console.log("Mensaje de respuesta: " + JSON.stringify(userData));
     
     
      dispatch({
          type: BUSCARCATEGORIAS,
          payload: userData.categoria,
      });
    } catch (error) {
      console.log("error al buscar el usuario")
    }

  }
}
//!Validacion del localstorang
export const Historial_Local = (color, talla, marca, tienda)=>{
  return async (dispatch) => {
    

    dispatch({
      type: BUSCARCOLORES,
      payload: color,
  });


    dispatch({
      type: BUSCARTALLA,
      payload: talla,
  });
    
    dispatch({
      type: BUSCARMARCA,
      payload: marca,
  });



  dispatch({
    type: BUSCAREMPRESA,
    payload: tienda,
});
  }
}




//! imagen

export const Guardar_Imagen = async (url_name)=>{
  return async () => {
   // const d = getEmpresa().correo
  // alert(d)
    const datos = {
                    name:url_name, 
                    correo:getEmpresa().correo, 
                    urlImagen:'' 
                  }
    const endpoint = `http://localhost:3001/empresa/imagen`;
    const response = await axios.post(endpoint, datos);
    const resp = response.data;

 //   console.log("Respuesta del servidor:", resp);

    return resp; // Devuelve la respuesta del servidor en lugar de userData
   
  }
}

export const Guardar_Stock = (dataUser, url, id) =>{
  return async () => {
   
    const datos = {
      tienda:id,
      marca:dataUser.marca, 
      costo:dataUser.costo, 
      color:dataUser.color, 
      modelo:dataUser.categoria, 
      calidad:dataUser.calidad, 
      descripcion:dataUser.descripcion, 
      urlImagen:url, 
      talla: dataUser.talla,
      correoEmpresa:getEmpresa().correo
    }

   alert('Estos son los datos'+JSON.stringify(datos))
    const endpoint = `http://localhost:3001/empresa/create/stock`;
    const response = await axios.post(endpoint, datos);
    const resp = response.data;

   // console.log("Respuesta del servidor:", resp);

    return resp; // Devuelve la respuesta del servidor en lugar de userData
   
  }
}


//! Mostramos las Card de la empresa 

export const Muestra_Cards_Empresa = (id) => {
  return async (dispatch) => {
    try {
      
      const endpoint = `http://localhost:3001/empresa/buscar/stock/${id}`; // URL del endpoint con el ID de la empresa
      const response = await axios.get(endpoint,id);
      const userData = response.data;

      console.log("Mensaje de respuesta: " + JSON.stringify(userData));

      dispatch({
        type: CARDSEMPRESA, // Tipo de acción exitosa (debes definir este tipo en tus acciones Redux)
        payload: userData.cards // Datos de las cards obtenidas, asumiendo que userData tiene una propiedad 'cards'
      });

    } catch (error) {
      console.error('Error al obtener las cards:', error);
    }
  };
};

export const Activar_Ocultar_Cards = (id) =>{
  return async () =>{
    const endpoint = `http://localhost:3001/empresa/buscar/stock/stado/${id}`; // URL del endpoint con el ID de la empresa
      const response = await axios.put(endpoint);
      const userData = response.data;
      console.log("estado actual " + userData);
    return true
  }
}
