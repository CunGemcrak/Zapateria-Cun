import React, { useEffect, useState } from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCards from '../Cards/Zapatos_card/Zapatos_Cards';
import './Home.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

const Home = () => {
  const user = useSelector((state) => state.USER);
  //const cards = useSelector((state) => state.CARDS);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!user || user.state === "false") {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className="home-container">
      {loading && <Loading />}
      <NavMenu className="nav-menu" />
      <div className="home-body">
        <NavFilter className="nav-filter" />
        <div className="content-cards">
          <ZapatosCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
