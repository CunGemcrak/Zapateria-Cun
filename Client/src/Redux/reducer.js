import { BUSCARUSUARIO, SALIRCUENTAUSUARIO, GUARDARUSUARIO } from './Action-Tipes-js/actions-type-usuario'
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
    MARCAS:null

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
       
            default:
                return {...state}
        }
    }
      /*  case TEMPERAMENTO:
            return {
                ...state, temperamento:payload
            }
        case FILTROINPUT:
            const copiedAllDogs = state.copydogs.slice(); // Copia el estado
            const busquedaporname = copiedAllDogs.filter(element => element.name.toLowerCase().includes(payload?.toLowerCase()))
            return {
                ...state,
                allDogs:busquedaporname
            }
        case ORDERAZ:
            let orderedDogs = state.copydogs.slice();
            if (payload === 'A') {
                orderedDogs.sort((a, b) => a.name.localeCompare(b.name));
            } else if (payload === 'B') {
                orderedDogs.sort((a, b) => b.name.localeCompare(a.name));
            }
            console.log('esto manda el reduces ' + JSON.stringify(orderedDogs))
            return {
                ...state,
                allDogs:orderedDogs
            }
        case FILTROTEMPERAMENTO:
            let copy = state.copydogs.slice();
            const busquedaportemperamento = copy.filter(element => {
                const temperament = element.temperament;
                if (temperament) {
                    return temperament.toLowerCase().includes(payload?.toLowerCase());
                }
                return false;
            });
            console.log("Esta es la busqueda " + busquedaportemperamento);
            return {
                ...state,
                allDogs:busquedaportemperamento
            }
        case COPYDOG:
            return{
                ...state,
                allDogs: state.copydogs
            } 
        case IDBD: 
        let bd = state.copydogs.slice();
            const busquedatpBD = bd.filter(element => {
                const tipoBD = element.bd;
                if (tipoBD) {
                    return tipoBD.toLowerCase().includes(payload?.toLowerCase());
                }
                return false;
            });
            console.log("Esta es la busqueda " + busquedatpBD);
            return {
                ...state,
                allDogs:busquedatpBD
            }
      
}*/

export default reducer;
