import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Muestra_Cards } from '../../../Redux/Actions/Usuario/Action-user';
import './ZatosCards.css';
import ZapatosCard from './card/Zapatos_Card';

const ZapatosCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.CARDS || []);
  const User = useSelector((state) => state.USER || {});
  const empresa = useSelector((state) => state.EMPRESA || {});

  useEffect(() => {
    dispatch(Muestra_Cards());
  }, [dispatch]);



  const filteredCards = cards.filter(card => {
    if (empresa.status === "true") {
      return true;
    }
    if (User.state === "true" && card.activo === "true") {
      return true;
    }
    return false;
  });

  return (
    <div className="zapatos-cards">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <ZapatosCard
            key={card.id}
            id={card.id}
            marca={card.marca}
            costo={card.costo}
            color={card.color}
            modelo={card.modelo}
            calidad={card.calidad}
            descripcion={card.descripcion}
            url={card.url}
            talla={card.talla}
            activo={card.activo}
          />
        ))
      ) : (
        <div>No hay usuario registrado o no hay tarjetas activas</div>
      )}
    </div>
  );
}

export default ZapatosCards;
