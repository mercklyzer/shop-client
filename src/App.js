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
import ScrollToTop from './components/ScrollToTop';

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
            <Route path='/products' exact element={ <ProductList />}/>
          </Routes>
          <Newsletter />
        </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
