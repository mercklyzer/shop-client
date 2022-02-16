import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center p-1.5 bg-teal-700 text-white text-sm">Super Deal! Free Shipping on Orders Over $50</div>
      <Navbar />
    </div>
  );
}

export default App;
