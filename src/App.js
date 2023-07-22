import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { useRef } from 'react';
import Contact from './components/Contact/Contact';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/utility-components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <NavBar />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
