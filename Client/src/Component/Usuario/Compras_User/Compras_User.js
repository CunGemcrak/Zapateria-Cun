import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData, setUserData } from '../LocalStorangUser/LocalstorangUser';
import { LogalstorangUSER, Buscar_Orders_Users } from '../../../Redux/Actions/Usuario/Action-user';
import Loading from '../../loading/Loading';
import NavMenu from '../../navMenu/NavMenu';
import './Compras_User.css';

const ComprasUser = () => {
  const [loading, setLoading] = useState(true);
  const Compras = useSelector((state) => state.ORDENES);
  const User = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.USER);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    const storedUser = getUserData();
    if (!user || user.state === "false") {
      if (!storedUser || storedUser.state === "false") {
        navigate('/');
      } else {
       //alert(storedUser.id);
        dispatch(Buscar_Orders_Users(storedUser.id));
        dispatch(LogalstorangUSER(storedUser));
      }
    } else {
      setUserData(user);
    }
  }, [navigate, user, dispatch]);

  return (
    <div>
      {loading && <Loading />}
      <NavMenu />
      <div className='body-orders-user'>
        <div className='caja-orders-user'>
          {Compras && Compras.length > 0 ? (
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
                      {JSON.parse(order.item).map((item, index) => (
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
                    <td>{order.preciototal}</td>
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
    </div>
  );
};

export default ComprasUser;
