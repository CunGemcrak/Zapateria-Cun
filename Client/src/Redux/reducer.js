import { BUSCARUSUARIO, 
         SALIRCUENTAUSUARIO, 
         GUARDARUSUARIO, 
         CARDSUSUARIO,
         ORDERDESARROLLADAS,//!creamos la ordern usuario
         ORDERUSER,//!Buscamos las orders del usuari
          } from './Action-Tipes-js/actions-type-usuario'

          
import { BUSCAREMPRESA, 
    BUSCARCOLORES, //!colores 
    BUSCARTALLA, //! Tallas
    BUSCARMARCA,//!Marcas
    BUSCARCATEGORIAS,//!Buscar Categorias
    BUSCARCALIDAD,//! Buscar Calidad 
    CARDSEMPRESA, //! traemos las cards de la empreza 
    EMPRESAORDERS,//!Empresas
  
} from "./Action-Tipes-js/actions-type-empresa";

const initialState = {
    USER: {state: 'false'},
    EMPRESA: {status: 'false'},
    COLORES:null,
    TALLAS:null,
    MARCAS:null,
    CARDS:null,
    CATEGORIAS: null,
    CALIDAD:null,
    VENTAUSER:null,
    ORDENES:[],

}

const reducer = (state= initialState, {type, payload})=>{
   // console.log("entro al reducer la informacion" + payload);
    switch( type ){
        case BUSCARUSUARIO:
            return{
                ...state, USER:payload
            }
            case BUSCAREMPRESA:
                return{
                    ...state, EMPRESA:payload
                }
            case SALIRCUENTAUSUARIO:
                return{
                    ...state,
                    USER:payload
                }
                case GUARDARUSUARIO:
                    return{
                        ...state, USER:payload
                    }

                    //! Emrpesa
                case BUSCARCOLORES:
                    return{
                        ...state, COLORES:payload
                    } 
                case BUSCARTALLA: 
                return{
                    ...state, TALLAS:payload
                } 
                case BUSCARMARCA:
                    return{
                        ...state, MARCAS:payload
                    } 
                case BUSCARCATEGORIAS:
                    return{
                        ...state, CATEGORIAS: payload
                    }
                case CARDSUSUARIO:
                
                    return{
                        ...state, CARDS:payload
                    }
                case BUSCARCALIDAD:
                    return{
                        ...state, CALIDAD:payload
                    } 
                case CARDSEMPRESA:
                    return{
                        ...state, CARDS:payload
                    }
                case ORDERDESARROLLADAS:
                    return{
                        ...state, VENTAUSER:payload
                    }
                case ORDERUSER:
                    return{
                        ...state, ORDENES:payload
                    }

                case EMPRESAORDERS:
                    return{
                        ...state, ORDENES:payload
                    }
       
            default:
                return {...state}
        }
    }

export default reducer;
