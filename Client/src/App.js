import './App.css';

import { Routes,Route} from "react-router-dom";



import Loading from './Component/loading/Loading';
import Login from './Component/Login/Login_General/Login_General'


function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<Loading/>}/>
      </Routes>
     


    </div>
  );
}

export default App;
