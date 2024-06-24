import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ZapatosCard.css';

const ZapatosCard = () => {
  const productos = [
    {
      imageUrl: 'https://res.cloudinary.com/dzb3dwute/image/upload/v1718542575/samples/ecommerce/leather-bag-gray.jpg',
      name: 'Zapato 1',
      description: 'Descripción del zapato 1',
      price: '$100',
    },
    {
      imageUrl: 'https://d13xymm0hzzbsd.cloudfront.net/2/20151029/14461566429942.jpg',
      name: 'Confort One',
      description: 'Zapatilla Nike Deportiva',
      price: '$350.000',
    },
    {
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_672092-MLC72649054454_112023-O.webp',
      name: 'Zapatos Formales',
      description: 'Zapato Formal Punta Fina',
      price: '$250.000',
    },
  ];

  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');

  const handleTallaChange = (talla) => {
    setTallaSeleccionada(talla);
  };

  const handleColorChange = (color) => {
    setColorSeleccionado(color);
  };

  const handleEnviarCarrito = (name) => {
    alert(`Producto agregado: ${name} - Talla: ${tallaSeleccionada} - Color: ${colorSeleccionado}`);
  };

  return (
    <div className="zapatos-container">
      {productos.map((producto, index) => (
        <div className="zapatos-card" key={index}>
          <img src={producto.imageUrl} alt={producto.name} className="zapatos-image" />
          <div className="zapatos-info">
            <h3 className="zapatos-name">{producto.name}</h3>
            <p className="zapatos-description">{producto.description}</p>
            <p className="zapatos-price">{producto.price}</p>
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
            <div className="selected-info">
              <p>Talla: {tallaSeleccionada}</p>
              <p>Color: {colorSeleccionado}</p>
            </div>
            <button className="zapatos-btn" onClick={() => handleEnviarCarrito(producto.name)}>
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZapatosCard;
