import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Muestra_Cards } from '../../../Redux/Actions/Usuario/Action-user';

import './ZatosCards.css'
import ZapatosCard from './Zapatos_Card';

const ZapatosCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.CARDS) || [];

  useEffect(() => {
    dispatch(Muestra_Cards());
  }, [dispatch]);

  return <div className="zapatos-list">
      {cards.map((card) => (
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
        />
      ))}
    </div>
  
}


export default ZapatosCards;