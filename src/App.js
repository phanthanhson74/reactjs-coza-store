import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from './pages/Features';
import Blogs from './pages/Blogs';


function App() {
  return (
    <div className="App">
      <Blogs />
    </div>
  );
}

export default App;
