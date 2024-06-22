import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';
import Loading from './Component/loading/Loading';
import Home from './Component/home/Home';
import PerfilUser from './Component/Usuario/Perfil_User/Perfil_User';

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/'  element={<Loading/>}/>
              <Route path='/login' element={<LoginPrincipal/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/perfiluser' element={<PerfilUser/>}/>
             
             
      </Routes>
     


    </div>
    
  );
}





export default App;
