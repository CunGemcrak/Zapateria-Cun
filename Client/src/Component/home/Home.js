import React from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCard from '../Cards/Zapatos_card/Zapatos_Card';
import './Home.css';
import PerfilUser from '../Usuario/Perfil_User/Perfil_User';

const Home = () => {
  return (
    <div className="home-container">
     
      <NavMenu className="nav-menu" />
      <div className='home-body'>
            <NavFilter className="nav-filter" />
            <div className="content-cards">
                    contenido de cartas   {/* Aquí iría el contenido principal de la página */}
                    <ZapatosCard/>
                    <PerfilUser/>
                    

            </div>
      </div>
    </div>
  );
}

export default Home;
