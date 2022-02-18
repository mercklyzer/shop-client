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

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Announcement />
          <Navbar />
          <Routes>
            <Route path='/' exact element={ <Home />}/>
            <Route path='/signup' exact element={ <Register />}/>
            <Route path='/login' exact element={ <Login />}/>
            <Route path='/product' exact element={ <Product />}/>
            <Route path='/products' exact element={ <ProductList />}/>
            <Route path='/cart' exact element={ <Cart />}/>
          </Routes>
          <Newsletter />
        </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
