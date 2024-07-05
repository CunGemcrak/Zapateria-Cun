import React, { useEffect, useState } from 'react';
import NavFilter from '../navFilter/navFilter';
import NavMenu from '../navMenu/NavMenu';
import ZapatosCards from '../Cards/Zapatos_card/Zapatos_Cards';
import './Home.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

import { setUserData, getUserData } from '../Usuario/LocalStorangUser/LocalstorangUser';
import { LogalstorangUSER } from '../../Redux/Actions/Usuario/Action-user';

const Home = () => {
  const user = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
