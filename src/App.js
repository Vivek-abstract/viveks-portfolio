import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection';
import AmaronSection from './components/AmaronSection/AmaronSection';
import { useRef } from 'react';
import Contact from './components/Contact/Contact';
import { Outlet } from 'react-router-dom';

function App() {
  console.log("Here");
  return (
    <div>
      <NavBar />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
