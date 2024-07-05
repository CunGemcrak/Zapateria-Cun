import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../loading/Loading';
import NavMenu from '../../navMenu/NavMenu';
import { getUserData, setUserData } from '../../Usuario/LocalStorangUser/LocalstorangUser';
import { getOrderCreate, getCartItems, clearCart } from '../Carrito_Localstorang/CaritoLocalstorang';
import { LogalstorangUSER, Actualizar_Order } from '../../../Redux/Actions/Usuario/Action-user';
import imgaprovado from './img/bolsa-de-la-compra.png';
import imgrechasado from './img/reprobaso.png';
import iconstilozap from './img/download.gif';
import { useDispatch, useSelector } from 'react-redux';
import './carritoRespuesta.css';

const CompraRespuesta = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0); // Estado para almacenar el costo total
    const user = useSelector((state) => state.USER);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

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
        // Cargar elementos del carrito al inicio
        const cartItems = getCartItems();
        setItems(cartItems);
        
        // Calcular el costo total al cargar los elementos del carrito
        const total = cartItems.reduce((acc, item) => acc + (item.costo * item.quantity), 0);
        setTotalCost(total);
        
        // Limpiar el carrito si la compra fue aprobada
        const query = new URLSearchParams(location.search);
        const collectionStatus = query.get('collection_status');
        const order = getOrderCreate();
        if (collectionStatus === 'approved') {
         
        
           dispatch(Actualizar_Order(order, 'Aprobado'))
            clearCart();
        }else{
          dispatch(Actualizar_Order(order, 'Rechazado'))
        }
    }, [location.search, dispatch]);

    const query = new URLSearchParams(location.search);
    const collectionStatus = query.get('collection_status');
    const merchantOrderId = query.get('merchant_order_id');
    const preferenceId = query.get('preference_id');
const handleCarrito = ()=>{
  navigate('/user/carrito')
}

const handleHome = () =>{
  navigate('/home')
}
    return (
        <div className='div-general'>
            {loading && <Loading />}
            <NavMenu />
            <div className="respuesta-carrito-container">
                <h1>Detalle de la Compra</h1>
                <div className="info-compra">
                    <img src={collectionStatus === 'approved' ? imgaprovado : imgrechasado} alt='Imagen de contexto' className="Approved-imagen" />
                    <img src={iconstilozap} alt='Imagen de contexto' className="firma-imagen" />
                    <div>ID de referencia de compra: {getOrderCreate()}</div>
                    <div>Número de Operación Mercado Pago: {query.get('collection_id')}</div>
                    <div className={collectionStatus === 'approved' ? "texto-approved" : "texto-No-approved"}>
                        Estado de la Compra: {collectionStatus === 'approved' ? "Aprobado" : "No Aprobado"}
                    </div>
                    <div>Orden de Pago Mercado Pago: {merchantOrderId}</div>
                    <div>ID de Preferencia: {preferenceId}</div>
                    {user && user.email ? (
                        <>
                            <div>Correo Usuario: {user.email}</div>
                            <div>Nombre Usuario: {user.name}</div>
                        </>
                    ) : (
                        <div>Usuario no autenticado</div>
                    )}
                    <div className='Costo-Total'>Costo Pagado: ${totalCost.toFixed(2)}</div>
                </div>

                <h2>Productos en el Carrito</h2>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.marca}</td>
                                <td>{item.quantity}</td>
                                <td>${item.costo}</td>
                                <td>${item.costo * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {collectionStatus === 'approved' ? (
                    <div className='login-button-respuesta' onClick={handleHome}>Compra Exitosa ahora continua comprando</div>
                ) : (
                    <div className='negate-div'>
                        <label>El estado de la compra no fue aprobado ahora continua con tu proceso ya que todo está guardado en tu carrito</label>
                        <div className="btn-reprovado" onClick={handleCarrito}>clic para continuar</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompraRespuesta;
