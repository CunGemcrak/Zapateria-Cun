import './App.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';
import Loading from './Component/loading/Loading';

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/'  element={<Loading/>}/>
              <Route path='/login' element={<LoginPrincipal/>}/>
             
      </Routes>
     


    </div>
    
  );
}





export default App;
