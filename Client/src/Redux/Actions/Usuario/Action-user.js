import { BUSCARUSUARIO, 
  SALIRCUENTAUSUARIO, 
  GUARDARUSUARIO, 
  CARDSUSUARIO, 
  CARRITOACTIVO, 
  ORDERDESARROLLADAS,
  ORDERUSER,
  FiltrarCaballero,//!filtros - Filtrar Caballeros
  FiltrarCaballeroAdd,//!Fitos - Add Caballeros
  FiltrarDama, //!filtrar - Damas 
  FiltrarDamaAdd,
  MARCA,
  SinFiltros,
  FiltrarMixto,
  FilterFor,
  FiltrarCombinado//!combinados

}from'../../Action-Tipes-js/actions-type-usuario'
import axios from 'axios'
import {   setUser, removeUser } from '../../../Component/Company/Company_Localstorang/Company_Localstorang';

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



//! persistencia de datos usuario
export const LogalstorangUSER = (userDatos)=>{
  return async(dispatch)=>{
    dispatch({
      type: BUSCARUSUARIO,
      payload: userDatos,
  });
  } 
}

//!Cerrar la cuenta
export const Salir_Usuario = ()=>{
    return async(dispatch)  =>{

       removeUser()
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


  //! Crear Id mercado pago

  
export const Compra = (description, cantidad, totalCost) => {
  return async () => {
    try {
      const datos = {
        description,
        price_total: totalCost,
        quantity_order: cantidad
      };
      const endpoint = 'http://localhost:3001/compra/';
      const response = await axios.post(endpoint, datos);
      const userData = response.data;
      return userData;
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  };
};

  //! Compra de Usuario 

export const ID_Registro_Mercado_Pago = (data, totalcost)=>{

  return async (dispatch)=>{
   // alert("Ejemplo 0" +JSON.stringify(data))
   try{
              const items = {
                idmercadopago: "null",
                item: data,
                preciototal: totalcost,
                eliminar:"activo",
                activo: "true"
              }
              const endpoint = `http://localhost:3001/user/venta`; // Usamos los datos en la URL como parámetros de ruta
              const response = await axios.post(endpoint, items);
              const userData = response.data; 
   
  

    console.log("Mensaje de respuesta: " + JSON.stringify(userData));


              dispatch({
                  type: CARRITOACTIVO,
                  payload: userData,
              });

    } catch (error) {
        console.log("Error al enviar la información", error.message);
    }

  }
  
}

export const Buscar_Tienda = (id)=> {
return async (dispatch)=>{
try {
  const endpoint = `http://localhost:3001/empresa/${id}`; // Usamos los datos en la URL como parámetros de ruta
  const response = await axios.get(endpoint);
  const userData = response.data; 
  console.log("esta es la data de la tienda" + JSON.stringify(userData))
  return(userData.name)
} catch (error) {
  
}
}
}

//! Creamos la orden 
export const Create_Order =  ( Id_Usuario, compra, items, totalCost, eliminar, estado) => {
  
    return async (dispatch)=>{
      try {
          const order = {
            id_usuario: Id_Usuario,
            idmercadopago:compra,	
            item	:items,
            preciototal	:totalCost,
            eliminar	:eliminar,
            estado :estado,
          }

    const endpoint = `http://localhost:3001/user/create/order`; // Usamos los datos en la URL como parámetros de ruta
    const response = await axios.post(endpoint, order);
    const userData = response.data; 

    dispatch({
      type: ORDERDESARROLLADAS,
      payload: userData.venta,
  });
  const {id} =  userData.venta

  return  id

  } catch (error) {
    
  }
}
}




export const Filr_Texto = (text) =>{
  return async (dispatch)=>{

    dispatch({
      type: MARCA,
      payload: text,
  });
   
  }
}
// Redux action para actualizar el estado de la empresa



export const Actualizar_Order = (id, estado) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/order/actualizar/${id}`;
      const response = await axios.put(endpoint, { estado });
      const empresaActualizada = response.data;

      // Aquí puedes despachar cualquier acción adicional o manejar la respuesta como necesites
      dispatch({ type: 'ACTUALIZAR_EMPRESA', payload: empresaActualizada });

      return empresaActualizada; // Devuelve los datos actualizados de la empresa si es necesario
    } catch (error) {
      console.error(error);
      // Manejo de errores si es necesario
    }
  };
};


export const Buscar_Orders_Users = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/user/orders/${id}`; // Usamos los datos en la URL como parámetros de ruta
      
    //  alert("paso");
      const response = await axios.get(endpoint);
      const userData = response.data; 
      console.log("esta es la data de la tienda", userData);
      
      dispatch({
        type: ORDERUSER,
        payload: userData, // Enviamos userData directamente si es el objeto que contiene las órdenes
      });
    } catch (error) {
     // alert("no encontro ordenes");
    }
  }
}

export const Filter_Tipo_Caballero= (cards) =>{
return async (dispatch)=>{

  dispatch({
    type: SinFiltros,
    payload: cards,
});
  dispatch({
    type: FiltrarCaballero,
    payload: cards,
});


}
}


export const Filter_Tipo_Dama = (cards) =>{

  return async (dispatch)=>{
    dispatch({
      type: SinFiltros,
      payload: cards,
  });


//alert("distpach 1listo")
    dispatch({
      type: FiltrarDama,
      payload: cards,
  });
  }

}

export const Filter_Tipo_Mixto = (cards)=>{
  return async (dispatch)=>{
    dispatch({
      type: SinFiltros,
      payload: cards,
  });


//alert("distpach 1listo")
    dispatch({
      type: FiltrarMixto,
      payload: cards,
  });
  }
}

export const  Filter_Quitar = ()=>{
  return async (dispatch)=>{


    dispatch({
      type: SinFiltros,
     
  });
  }
}

export const Filter_For = (filter) => {
  return async (dispatch)=>{


    dispatch({
      type: FilterFor,
      payload:filter
     
  });
  }
}

export const Combined_Filter = (cards, type, category, size, brand) => {
  return async (dispatch) => {
    let filteredCards = cards;

    // Filtrar por tipo
    if (type) {
      switch (type) {
        case 'caballero':
          filteredCards = filteredCards.filter(card => card.tipo === 'Caballero');
          break;
        case 'dama':
          filteredCards = filteredCards.filter(card => card.tipo === 'Dama');
          break;
        case 'mixto':
          filteredCards = filteredCards.filter(card => card.tipo === 'Mixto');
          break;
        default:
          break;
      }
    }

    // Filtrar por categoría
    if (category) {
      filteredCards = filteredCards.filter(card => card.modelo === category);
    }

    // Filtrar por talla
    if (size) {
      filteredCards = filteredCards.filter(card => card.talla === size);
    }

    // Filtrar por marca
    if (brand) {
      const brandLowerCase = brand.toLowerCase();
      filteredCards = filteredCards.filter(card => card.marca.toLowerCase().includes(brandLowerCase));
    }

    // Despachar la acción con las tarjetas filtradas
    dispatch({
      type: FiltrarCombinado,
      payload: filteredCards,
    });
  };
};

export const Actualizar_Usuario = (id,  formData) =>{
  return async (dispatch) => {
 //alert("entro al Actualizar")
    try {

      const users = {
                      id,
                      name: formData.nombre,
                      apell: formData.apellido,
                      celular: formData.celular,
                      email: formData.email,
                      url:formData.url}



      const endpoint = `http://localhost:3001/user/actualizardatos/${id}`; // Usamos los datos en la URL como parámetros de ruta
      
    //  alert("paso");
      const response = await axios.put(endpoint, users);
      const userData = response.data; 
      console.log("esta es la data del usuario", userData.data);
      
      dispatch({
        type: BUSCARUSUARIO,
        payload: userData.data, // Enviamos userData directamente si es el objeto que contiene las órdenes
      });
    } catch (error) {
     // alert("no encontro ordenes");
    }
  } 
}