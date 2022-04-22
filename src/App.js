import React, { useState } from 'react';
import Home from './pages/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './pages/Signup';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pay from './components/Pay';
import Footer from './components/Footer';
import Orders from './pages/Orders';

function App() {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <div className="sticky top-0 z-50">
            <Announcement />
            <Navbar setShowOverlay={setShowOverlay}/>
          </div>
          <div className="relative">
            <Routes>
              <Route path='/' exact element={ <Home />}/>
              <Route path='/signup' exact element={ <Signup />}/>
              <Route path='/login' exact element={ <Login />}/>
              <Route path='/products/:category' element={ <ProductList />}/>
              <Route path='/product/:id' exact element={ <Product />}/>
              <Route path='/cart' exact element={ <Cart />}/>
              <Route path='/orders' exact element={ <Orders />}/>
              <Route path='/pay' exact element={ <Pay />}/>
            </Routes>
              <div className={`absolute bg-black opacity-50 top-0 z-10 ${showOverlay? 'h-full w-full': 'h-0 w-0'}`}></div>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
