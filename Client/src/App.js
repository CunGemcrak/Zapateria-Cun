import './App.css';

import { Routes,Route} from "react-router-dom";





import LoginPrincipal from './Component/Login/Login_Principal/LoginPrincipal';


function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/' element={<LoginPrincipal/>}/>
              {//<Route path='/' element={<Loading/>}/>
              }
      </Routes>
     


    </div>
  );
}

export default App;
