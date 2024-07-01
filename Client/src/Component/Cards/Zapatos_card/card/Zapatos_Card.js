import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ZapatosCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, getCartItems } from '../../../Carrito/Carrito_Localstorang/CaritoLocalstorang';


import {Activar_Ocultar_Cards} from '../../../../Redux/Actions/Empresa/Actions-Empresa'
const ZapatosCard = ({
  id,
  marca,
  costo,
  color,
  modelo,
  calidad,
  descripcion,
  url,
  talla,
  activo
}) => {
  const User = useSelector((state) => state.USER);
  const [cartItems, setCartItems] = useState([]);
  const [stadobtn, setStatebtn] = useState()
  const dispatch = useDispatch()

  // Cargar productos del carrito desde localStorage al inicio
  useEffect(() => {
    const items = getCartItems();
    if(activo === "true"){
      setStatebtn(true)
    }else{
      setStatebtn(false)
    }
    setCartItems(items.map(item => item.id)); // Guarda solo los IDs en cartItems para simplificar la comparación
  }, [activo]);

  const handleActivar = async (id) => {
    
     const dato = await dispatch(Activar_Ocultar_Cards(id))
    alert("Activar" + dato);
    setStatebtn(true)
  };

  const handleOcultar = async (id) => {
   
    const dato = await dispatch(Activar_Ocultar_Cards(id))
    alert("Ocultar" + dato);
    setStatebtn(false)
  
  };

  const handleAddToCart = () => {
    const item = {
      id,
      marca,
      costo,
      color,
      modelo,
      calidad,
      descripcion,
      url,
      talla,
      quantity: 1 // Ajusta la cantidad según tu necesidad
    };
    addToCart(item);
    setCartItems([...cartItems, id]); // Agrega el ID del producto al array de cartItems
    alert("Producto agregado al carrito");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id); // Implementa la función para eliminar del carrito
    setCartItems(cartItems.filter(itemId => itemId !== id)); // Elimina el ID del producto del array de cartItems
    alert("Producto eliminado del carrito");
  };

  // Verifica si el producto está en el carrito
  const isInCart = cartItems.includes(id);

  return (
    <div className="zapatos-card" title={id}>
      <img
        src={url}
        alt="Zapato"
        className="zapatos-image"
      />
      <div className="zapatos-info">
        <div className='titulo-zapato'><p className='black-text'>Marca: </p> {marca}</div>
        <div className="zapatos-price">
          <div className='parrafo-flex'><p className='black-text'>Calidad:</p> {calidad}   <p className='black-text'> Categoria:</p> {modelo}</div>
          <div className='parrafo-flex'><p className='black-text'>Tallas:</p> {talla} <p className='black-text'> Color:</p> {color}</div>
          <div className='parrafo-flex'><p className='black-text'>Costo:</p> ${costo}</div>
        </div>
        {
          User.state === "true" ?
            isInCart ?
                      <button className="zapatos-btn-Eliminar" onClick={() => { handleRemoveFromCart() }}>
                        <FontAwesomeIcon icon={faTrash} className="icon" /> Eliminar del carrito
                      </button>
                      :
                      <button className="zapatos-btn" onClick={() => { handleAddToCart() }}>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        Agregar al carrito
                      </button>
            : stadobtn   
            ?
            <button className="zapatos-btn-Activar" onClick={() => { handleOcultar(id) }}>
            <FaEye className="icon" /> Activo
          </button>
              :
              
              <button className="zapatos-btn-Ocultar" onClick={() => { handleActivar(id) }}>
              <FaEyeSlash className="icon" /> Oculto
            </button>
        }
      </div>
    </div>
  );
}

export default ZapatosCard;
