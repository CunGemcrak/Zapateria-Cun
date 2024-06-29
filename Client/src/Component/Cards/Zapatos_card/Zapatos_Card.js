import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ZapatosCard.css';

const ZapatosCard = ({key,
  id, 
  marca,
  costo,
  color,
  modelo,
  calidad,
  descripcion,
  url,
  talla}) => {
    /*
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  //const [menuDesplegado, setMenuDesplegado] = useState(false);
/*
  const handleTallaChange = (talla) => {
    setTallaSeleccionada(talla);
  };

  const handleColorChange = (color) => {
    setColorSeleccionado(color);
  };
const hondleEnviarCarrito = ()=>{
    alert("entro")
}
*/

  return (
    <div className="zapatos-card" title={id}>
      <img
        src={url}
        alt="Zapato"
        className="zapatos-image"
      />
      <div className="zapatos-info">
        <h3 className="zapatos-name">Marca:{marca}</h3>
        <p className="zapatos-description">Descripción: {descripcion}</p>
        <div className='display-flex-cards'>
              <p className="zapatos-price">${costo}</p>
              <p className="zapatos-price"> - {calidad} - </p>
              <p className="zapatos-price"> {modelo}</p>
        </div>
        
        
        <div className="dropdown">
          
         
            <div className="dropdown-content">
             Talla: { talla/*<select onChange={(e) => handleTallaChange(e.target.value)}>
                <option value="">Seleccione talla</option>
                {Array.from(Array(9).keys()).map((num) => (
                  <option key={num} value={36 + num}>{36 + num}</option>
                ))}
              </select>*/ }
              - Color: {color}
              
              </div>
              <div className="dropdown-content">
              {
              /*<select onChange={(e) => handleColorChange(e.target.value)}>
                <option value="">Seleccione color</option>
                <option value="Convionado">Color Convionado</option>
                <option value="Joro">Color Joro</option>
                <option value="Negro">Color Negro</option>
                <option value="Azul">Color Azul</option>
                <option value="Verde">Color Verde</option>
                <option value="Cafe">Color Café</option>
                <option value="Gris">Color Gris</option>
             </select>*/}
             </div>
          
        </div>
        {/*<p>Talla seleccionada: {tallaSeleccionada}</p>
        <p>Color seleccionado: {colorSeleccionado}</p>*/}
        <button className="zapatos-btn" >
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            Agregar al carrito
          </button>
      </div>
    </div>
  );
}

export default ZapatosCard;

