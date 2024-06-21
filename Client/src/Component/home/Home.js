import React, { useEffect } from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCard from '../Cards/Zapatos_card/Zapatos_Card';
import './Home.css';
import PerfilUser from '../Usuario/Perfil_User/Perfil_User';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const User = useSelector((state) => state.USER);
  const navegar = useNavigate();

  useEffect(() => {
    if (!User) {
      navegar('/');
    }
  }, [navegar, User]);

  return (
    <div className="home-container">
      <NavMenu className="nav-menu" />
      <div className="home-body">
        <NavFilter className="nav-filter" />
        <div className="content-cards">
          {/* Aquí iría el contenido principal de la página */}
          <ZapatosCard />
          <PerfilUser />
        </div>
      </div>
    </div>
  );
};

export default Home;
