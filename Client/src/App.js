import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';
import Loading from './Component/loading/Loading';
import Home from './Component/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/'  element={<Loading/>}/>
              <Route path='/login' element={<LoginPrincipal/>}/>
              <Route path='/home' element={<Home/>}/>
             
             
      </Routes>
     


    </div>
    
  );
}





export default App;
