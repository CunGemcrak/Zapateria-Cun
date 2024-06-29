import { BUSCARUSUARIO, SALIRCUENTAUSUARIO, GUARDARUSUARIO, CARDSUSUARIO } from './Action-Tipes-js/actions-type-usuario'
import { BUSCAREMPRESA, 
    BUSCARCOLORES, //!colores 
    BUSCARTALLA, //! Tallas
    BUSCARMARCA,//!Marcas
} from "./Action-Tipes-js/actions-type-empresa";

const initialState = {
    USER: {state: 'false'},
    EMPRESA: {status: 'false'},
    COLORES:null,
    TALLAS:null,
    MARCAS:null,
    CARDS:null

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
                case CARDSUSUARIO:
                
                    return{
                        ...state, CARDS:payload
                    } 
       
            default:
                return {...state}
        }
    }

export default reducer;
