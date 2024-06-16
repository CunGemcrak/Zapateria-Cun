import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ZapatosCard.css';

const ZapatosCard = () => {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  //const [menuDesplegado, setMenuDesplegado] = useState(false);

  const handleTallaChange = (talla) => {
    setTallaSeleccionada(talla);
  };

  const handleColorChange = (color) => {
    setColorSeleccionado(color);
  };
const hondleEnviarCarrito = ()=>{
    alert("entro")
}


  return (
    <div className="zapatos-card">
      <img
        src="https://res.cloudinary.com/dzb3dwute/image/upload/v1718542575/samples/ecommerce/leather-bag-gray.jpg"
        alt="Zapato"
        className="zapatos-image"
      />
      <div className="zapatos-info">
        <h3 className="zapatos-name">Nombre del zapato</h3>
        <p className="zapatos-description">Descripción del zapato</p>
        <p className="zapatos-price">$100</p>
        <div className="dropdown">
          
         
            <div className="dropdown-content">
              <select onChange={(e) => handleTallaChange(e.target.value)}>
                <option value="">Seleccione talla</option>
                {Array.from(Array(9).keys()).map((num) => (
                  <option key={num} value={36 + num}>{36 + num}</option>
                ))}
              </select>
              </div>
              <div className="dropdown-content">
              <select onChange={(e) => handleColorChange(e.target.value)}>
                <option value="">Seleccione color</option>
                <option value="Convionado">Color Convionado</option>
                <option value="Joro">Color Joro</option>
                <option value="Negro">Color Negro</option>
                <option value="Azul">Color Azul</option>
                <option value="Verde">Color Verde</option>
                <option value="Cafe">Color Café</option>
                <option value="Gris">Color Gris</option>
             </select>
             </div>
          
        </div>
        <p>Talla seleccionada: {tallaSeleccionada}</p>
        <p>Color seleccionado: {colorSeleccionado}</p>
        <button className="zapatos-btn" onClick={hondleEnviarCarrito}>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            Agregar al carrito
          </button>
      </div>
    </div>
  );
}

export default ZapatosCard;

