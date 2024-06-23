import React, { useEffect, useState } from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCard from '../Cards/Zapatos_card/Zapatos_Card';
import './Home.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

const Home = () => {
  const User = useSelector((state) => state.USER);
  const navegar = useNavigate();
  const [loading, setLoading] =useState(true)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!User || User.state === "false" || User === "false") {
      navegar('/');
    }
  }, [navegar, User]);

  return (
    <div className="home-container">
      {
              loading
              ?<Loading/>
              :null
            }
      <NavMenu className="nav-menu" />
      <div className="home-body">
        <NavFilter className="nav-filter" />
        <div className="content-cards">
          {/* Aquí iría el contenido principal de la página */}
          <ZapatosCard />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
