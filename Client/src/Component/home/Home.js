import React, { useEffect, useState } from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCard from '../Cards/Zapatos_card/Zapatos_Card';
import './Home.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';
import ZapatosCards from '../Cards/Zapatos_card/Zapatos_Cards';
//import ZapatosCards from '../Cards/Zapatos_card/Zapatos_Cards';

const Home = () => {
  const User = useSelector((state) => state.USER);
  const cards = useSelector((state) =>state.CARDS)
  const navegar = useNavigate();
  const [loading, setLoading] =useState(true)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
     // alert(JSON.stringify(User))
      
    }, 3000);

    return () => clearTimeout(timer);
  }, [User]);
  useEffect(() => {
    if (!User || User.state === "false") {
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
                    <ZapatosCards/>
                   
                  
        </div>
      </div>
    </div>
  );
};

export default Home;
