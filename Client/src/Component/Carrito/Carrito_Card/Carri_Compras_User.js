import React, { useEffect, useState } from 'react';
import './Carrito.css';
import NavMenu from '../../navMenu/NavMenu';
import Loading from '../../loading/Loading';
import { FaTrash } from 'react-icons/fa';
import { getCartItems, removeFromCart, updateCartItemQuantity, setOrderCreate, getOrderCreate } from '../Carrito_Localstorang/CaritoLocalstorang';
import { setUserData, getUserData } from '../../Usuario/LocalStorangUser/LocalstorangUser';




import {  initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { Compra, 
       
         Create_Order,
         LogalstorangUSER,
} from '../../../Redux/Actions/Usuario/Action-user';
import { useDispatch, useSelector } from 'react-redux';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const user = useSelector((state)=>state.USER)
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(false);
  const [urlcompras, setUrlcompras] = useState('');
  
  const [preferenceId, setPreferenceId] = useState({}); // Estado para almacenar los nombres de las tiendas buscadas
  const dispatch = useDispatch();
  const navigate = useNavigate()
  initMercadoPago('APP_USR-680600b4-3814-4ea2-9757-b5f51229a54c');



  useEffect(() => {
    const storedUser = getUserData();

    if (!user || user.state === "false") {
      if (!storedUser || storedUser.state === "false") {
        navigate('/');
      } else {
        dispatch(LogalstorangUSER(storedUser));
      }
    } else {
      setUserData(user);
    }
  }, [navigate, user, dispatch]);



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

  const handleCrearOrden = async () => {
    try {
      // Obtener los artículos del carrito desde el almacenamiento local
      const cartItems = getCartItems();
  
      // Agrupar los artículos por tienda
      const grouped = cartItems.reduce((acc, item) => {
        if (!acc[item.tienda]) {
          acc[item.tienda] = [];
        }
        acc[item.tienda].push(item);
        return acc;
      }, {});
  
      // Preparar datos para la orden
      const orders = [];
      let totalCostGlobal = 0;
      let totalItems = 0;
      let descriptionsGlobal = '';
  
      // Iterar sobre cada tienda y calcular detalles globales
      for (const [tienda, items] of Object.entries(grouped)) {
        const totalCost = items.reduce((total, item) => total + item.costo * item.quantity, 0);
        const cantidad = items.reduce((total, item) => total + item.quantity, 0);
        const descriptions = items.map(item => item.descripcion).join(', ');
  
        // Agregar detalles globales
        totalCostGlobal += totalCost;
        totalItems += cantidad;
        descriptionsGlobal += descriptions + ', ';
  
        // Agregar orden a la lista
        orders.push({ tienda, items, totalCost });
      }
  
      // Eliminar la última coma en descriptionsGlobal
      descriptionsGlobal = descriptionsGlobal.slice(0, -2);
  
      // Crear la compra y obtener el URL de Mercado Pago
      const compra = await dispatch(Compra(descriptionsGlobal, totalItems, totalCostGlobal));
      setUrlcompras(compra);
  
      // Crear la orden en el backend para todas las tiendas
      const Id_Usuario = user.id
      const order = await dispatch(Create_Order(Id_Usuario, compra, cartItems, totalCostGlobal, 'false', 'Registrada'));
  
      // Mostrar alerta con los detalles de la orden creada
      setOrderCreate(order)
      alertify.alert('Orden creada', `Orden ID: ${order}, ID de compra: ${compra}`);
      const prefId = compra.replace('https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=', '');
      alertify.alert('Orden creada', `Orden ID: ${order}, ID de compra: ${compra} Este es el id ${prefId}`);
      setPreferenceId(prefId)
  
      // Marcar la orden como creada
      setOrder(true);
    } catch (error) {
      console.error(error);
      alertify.alert('Error', 'No se pudo crear la preferencia de pago.');
    }
  };
  

 const habldeCancelar = () =>{
  setOrder(false)
 }

  return (
    <div>
      {loading && <Loading />}
      <NavMenu className="nav-menu" />
      <div className="CarritoBody">
        <div className="Carrito-cards">
          <div className="Carrito-cards-titulo">
            <h1>Carrito de Compras</h1>
          </div>
          <div className="grup-generl-cart">
            <div className="Carrito-cards-contenido">
              {cartItems.length === 0 ? (
                <div className="no-items-message">No hay elementos en el carrito</div>
              ) : order === false ? (
                cartItems.map(item => (
                  <div key={item.id} className="carrito-item-genmeral">
                    <img src={item.url} alt="Imagen del item para venta" className="carrito-imagen-item" />
                    <div className="item-card-conmtenido">
                      {item.marca}, ${item.costo}, {item.calidad}, Talla: {item.talla} 

                    </div>
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
              ) : (
                <div className='ordern-Creada-Lista'>
  <h1 className='Order_Lista'>Orden Generada # { getOrderCreate() }</h1>
  <div className="orders-container">
    {getCartItems().flatMap((item, index) => (
      <div key={index} className="orden-item">
        <div>{item.descripcion}</div>
        <div>Costo: ${item.costo * item.quantity}</div>
      </div>
    ))}
  </div>
  
  
  <Wallet
        initialization={{ preferenceId }}
        customization={{
          redirectMode: 'blank',
          texts: { valueProp: 'smart_option' },
        }}
      />

</div>

              )}
            </div>
          </div>
          {order === false ? (
            <div className="crear-orden-carrito">
              <div className="item-card-pagar">Total a Pagar</div>
              <div className="item-card-pagar">Costo: ${calculateTotal()}</div>
              <div className="item-card-pagar">
                <div className="btn-carrito-order" onClick={handleCrearOrden}>Crear Orden</div>
              </div>
            </div>
          ) : (
            <div className="crear-orden-carrito">
              <div className="item-card-pagar"></div>
              <div className="item-card-pagar"></div>
              <div className="item-card-pagar">
                <div className="btn-carrito-order" onClick={habldeCancelar}>Cancelar Orden</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
