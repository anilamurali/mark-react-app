import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addmark from './Component/Addmark';
import Viewmark from './Component/Viewmark';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Component/Search';

function App() {
  return (
    <>
    
  <BrowserRouter>
  <Routes>
  <Route path='/' exact element={<Addmark/>}/>
  <Route path='/search' exact element={<Search/>}/>
      <Route path='/view' exact element={<Viewmark/>}/>
      
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
