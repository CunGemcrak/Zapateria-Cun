import './App.css';

import { Routes,Route} from "react-router-dom";



import Loading from './Component/loading/Loading';
import Login from './Component/Login/Login'


function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/' element={<Loading/>}/>
              <Route path='/login' element={<Login/>}/>
     
        
      </Routes>
     


    </div>
  );
}

export default App;
