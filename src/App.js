import React from 'react';
import Home from './pages/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/Register';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pay from './components/Pay';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Announcement />
          <Navbar />
          <Routes>
            <Route path='/shop-client' exact element={ <Home />}/>
            <Route path='/shop-client/signup' exact element={ <Register />}/>
            <Route path='/shop-client/login' exact element={ <Login />}/>
            <Route path='/shop-client/product' exact element={ <Product />}/>
            <Route path='/shop-client/products' exact element={ <ProductList />}/>
            <Route path='/shop-client/cart' exact element={ <Cart />}/>
            <Route path='/shop-client/pay' exact element={ <Pay />}/>
          </Routes>
          <Newsletter />
        </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
