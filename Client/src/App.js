import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';

import Home from './Component/home/Home';
import PerfilUser from './Component/Usuario/Perfil_User/Perfil_User';
import CompanyHome from './Component/Company/Company_home/CompanyHome';
import CompanyZapatos from './Component/Company/Company_Zapatos/CompanyZapatos';
import CompanyOrders from './Component/Company/Company_Order/CompanyOrders';

function App() {
  return (
    <div className="App">
      <Routes>
              
              <Route path='/' element={<LoginPrincipal/>}/>
              <Route path='/home' element={<Home/>}/>

              <Route path='/perfiluser' element={<PerfilUser/>}/>

              <Route path='/perfilusuario' element={<PerfilUser/>}/>
              <Route path='/company' element={<CompanyHome/>}/>
              <Route path='/company/zapatos' element={<CompanyZapatos/>}/>
              <Route path='/company/ventas' element={<CompanyOrders/>}/>

             
             
      </Routes>
     


    </div>
    
  );
}





export default App;
