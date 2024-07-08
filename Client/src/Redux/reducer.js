import { BUSCARUSUARIO, 
         SALIRCUENTAUSUARIO, 
         GUARDARUSUARIO, 
         CARDSUSUARIO,
         ORDERDESARROLLADAS,//!creamos la ordern usuario
         ORDERUSER,//!Buscamos las orders del usuari
         FiltrarCaballero,
         FiltrarCaballeroAdd,
         FiltrarDama, //!filtrar - Damas 
         FiltrarDamaAdd,
         SinFiltros,
         FiltrarMixto,
         FilterFor,
         FiltrarCombinado,
         MARCA
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
    COLORES: null,
    TALLAS: null,
    MARCAS: null,
    CARDS: null,
    CopyCARDS: null,
    CATEGORIAS: null,
    CALIDAD: null,
    VENTAUSER: null,
    ORDENES: [],
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case BUSCARUSUARIO:
        return { ...state, USER: payload };
  
      case BUSCAREMPRESA:
        return { ...state, EMPRESA: payload };
  
      case SALIRCUENTAUSUARIO:
        return { ...state, USER: payload };
  
      case GUARDARUSUARIO:
        return { ...state, USER: payload };
  
      case BUSCARCOLORES:
        return { ...state, COLORES: payload };
  
      case BUSCARTALLA:
        return { ...state, TALLAS: payload };
  
      case BUSCARMARCA:
        return { ...state, MARCAS: payload };
  
      case BUSCARCATEGORIAS:
        return { ...state, CATEGORIAS: payload };
  
      case CARDSUSUARIO:
        return { ...state, CARDS: payload, CopyCARDS: payload }; // Asegurar que CopyCARDS se establece aquí
  
      case BUSCARCALIDAD:
        return { ...state, CALIDAD: payload };
  
      case CARDSEMPRESA:
        return { ...state, CARDS: payload, CopyCARDS: payload }; // Asegurar que CopyCARDS se establece aquí
  
      case ORDERDESARROLLADAS:
        return { ...state, VENTAUSER: payload };
  
      case ORDERUSER:
        return { ...state, ORDENES: payload };
  
      case EMPRESAORDERS:
        return { ...state, ORDENES: payload };
  
        case SinFiltros:
          return { ...state, CARDS: state.CopyCARDS };
    
        case FiltrarCaballero:
          const filteredCardsCaballero = state.CopyCARDS.filter(card => card.tipo === 'Caballero');
          return { ...state, CARDS: filteredCardsCaballero };
    
        case FiltrarDama:
          const filteredCardsDama = state.CopyCARDS.filter(card => card.tipo === 'Dama');
          return { ...state, CARDS: filteredCardsDama };
    
        case FiltrarMixto:
          const filteredCardsMixto = state.CopyCARDS.filter(card => card.tipo === 'Mixto');
          return { ...state, CARDS: filteredCardsMixto };
    
        case FiltrarCombinado:
          return { ...state, CARDS: payload };
    
        case FilterFor:
          return { ...state, CARDS: payload };
        
        
          case MARCA:

        let copy = state.CopyCARDS.slice();
            const busquedapormarca = copy.filter(element => {
                const marca = element.marca;
                if (marca) {
                    return marca.toLowerCase().includes(payload?.toLowerCase());
                }
                return false;
            });
          
            return {
                ...state,
                CARDS:busquedapormarca
            }
         
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;
  