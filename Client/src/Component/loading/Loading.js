
import { useEffect, useState } from 'react';
import loadigimage from './img/download.gif'

import './Loading.css'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const navigator = useNavigate() 
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="body_loading">
          
          {
          loading
          ?<img src={loadigimage} alt="Imagen Loading" className="img-loading-carga"/>
          :navigator('/login')
          }

        </div>
    );
};

export default Loading;
