import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Home from './pages/Home';
 import Cartp from './pages/Cart.jsx'
 import Header from './components/Header.jsx';
 function App() {
  return (
     <BrowserRouter>
     <Header></Header>
     
     <Routes>
     <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/cart" element={<Cartp />}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
