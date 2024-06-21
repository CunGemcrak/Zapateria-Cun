import { useEffect, useState } from 'react';
import loadingImage from './img/download.gif';
import './Loading.css';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
     
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`body_loading ${loading ? 'visible' : ''}`}>
      {loading && <img src={loadingImage} alt="Imagen Loading" className="img-loading-carga" />}
    </div>
  );
};

export default Loading;
