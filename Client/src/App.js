import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';

import Home from './Component/home/Home';
import PerfilUser from './Component/Usuario/Perfil_User/Perfil_User';
import CompanyHome from './Component/Company/Company_home/CompanyHome';

function App() {
  return (
    <div className="App">
      <Routes>
              
              <Route path='/' element={<LoginPrincipal/>}/>
              <Route path='/home' element={<Home/>}/>

              <Route path='/perfiluser' element={<PerfilUser/>}/>

              <Route path='/perfilusuario' element={<PerfilUser/>}/>
              <Route path='/company' element={<CompanyHome/>}/>

             
             
      </Routes>
     


    </div>
    
  );
}





export default App;
