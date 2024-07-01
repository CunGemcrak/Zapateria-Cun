import React, { useEffect, useState } from 'react';
import './Carrito.css';
import NavMenu from '../../navMenu/NavMenu';
import Loading from '../../loading/Loading';
import { FaTrash } from 'react-icons/fa';
import { getCartItems, removeFromCart, updateCartItemQuantity } from '../Carrito_Localstorang/CaritoLocalstorang';

const Carrito = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleUpdateQuantity = (id, quantity) => {
    updateCartItemQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.costo * item.quantity, 0);
  };

  return (
    <div>
      {loading && <Loading />}
      <NavMenu className="nav-menu" />
      <div className="CarritoBody">
        <div className="Carrito-cards">
          <div className="Carrito-cards-titulo">
            <h1>Carrito de Compras</h1>
          </div>
          <div className='grup-generl-cart'>
            <div className="Carrito-cards-contenido">
              {cartItems.length === 0 ? (
                <div className="no-items-message">No hay elementos en el carrito</div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="carrito-item-genmeral">
                    <img src={item.url} alt="Imagen del item para venta" className="carrito-imagen-item" />
                    <div className="item-card-conmtenido">{item.descripcion}</div>
                    <div className="grub-botones-carrito">
                      <div className="item-card-conmtenido">
                        <div className="btn-carrito" onClick={() => handleRemoveItem(item.id)}>
                          <FaTrash />
                        </div>
                      </div>
                      <div className="btn-carrito" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                        -
                      </div>
                      <div className="item-card-conmtenido">
                        <input type="text" className="input-carrito" value={item.quantity} readOnly />
                      </div>
                      <div className="btn-carrito" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                        +
                      </div>
                    </div>
                    <div className="item-card-conmtenido">Costo: ${item.costo * item.quantity}</div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="crear-orden-carrito">
            <div className="item-card-pagar">Total a Pagar</div>
            <div className="item-card-pagar">Costo: ${calculateTotal()}</div>
            <div className="item-card-pagar">
              <div className="btn-carrito-order">Crear Orden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
