import './App.css';

import { Routes,Route} from "react-router-dom";
import LoginPrincipal from './Component/Login/Login_Principal/Login_User';

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/' element={<LoginPrincipal/>}/>
             
      </Routes>
     


    </div>
  );
}

export default App;
