import React, { useEffect, useState } from 'react';
import Loading from '../../loading/Loading';
import CompanyMenu from '../Company_Menu/CompanyMenu';
import './CompanyOrder.css';
import { useDispatch, useSelector } from 'react-redux';
import { Buscar_Orders_Empresa } from '../../../Redux/Actions/Empresa/Actions-Empresa';

const CompanyOrders = () => {
  const [loading, setLoading] = useState(true);
  const Compras = useSelector((state) => state.ORDENES);
  const dispatch = useDispatch();
  const tienda = useSelector((state) => state.EMPRESA);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      dispatch(Buscar_Orders_Empresa(tienda.id)); // Llamar a la acción para buscar órdenes por empresa
    }, 3000); // Tiempo simulado de carga

    return () => clearTimeout(timer);
  }, [dispatch, tienda.id]);

  // Función para calcular el costo total de una orden
  const calcularCostoTotal = (items) => {
    return items.reduce((total, item) => total + parseFloat(item.costo) * item.quantity, 0);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <CompanyMenu className="nav-menu" />
      <div className="body-orders">
        <h2>Lista de Pedidos</h2>
        <div className="table-container">
          {Compras.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th># Orden</th>
                  <th>Items</th>
                  <th>Precio Total</th>
                  <th>Estado</th>
                 
                </tr>
              </thead>
              <tbody>
                {Compras.map((order) => (
                  <tr key={order.id} className={order.estado.toLowerCase()}>
                    <td>{order.id}</td>
                    <td>
                      {order.item.map((item, index) => (
                        <div key={index} className="items-container">
                          <p>Marca: {item.marca}</p>
                          <p>Modelo: {item.modelo}</p>
                          <p>Color: {item.color}</p>
                          <p>Talla: {item.talla}</p>
                          <p>Cantidad: {item.quantity}</p>
                          <img src={item.url} alt={item.descripcion} width="50" />
                        </div>
                      ))}
                    </td>
                    <td>{calcularCostoTotal(order.item)}</td>
                    <td>{order.estado}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No tienes compras registradas</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyOrders;
