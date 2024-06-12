
import loadigimage from './img/download.gif'

import './Loading.css'

const Loading = () => {
  
    return (
        <div className="body_loading">
          
           <img src={loadigimage} alt="Imagen Loading" className="img-loading-carga"/>

        </div>
    );
};

export default Loading;
