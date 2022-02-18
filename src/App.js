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

function App() {
  return (
    <div className="App">
      <Router>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path='/signup' exact element={ <Register />}/>
          <Route path='/' exact element={ <Home />}/>
        </Routes>
        <Newsletter />
      </Router>
      
    </div>
  );
}

export default App;
