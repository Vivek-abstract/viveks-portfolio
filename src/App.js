import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection';
import AmaronSection from './components/AmaronSection/AmaronSection';
import { useRef } from 'react';
import Contact from './components/Contact/Contact';

function App() {
  // For scrolling
  const workRef = useRef(null);

  return (
    <div>
      <NavBar refProp={workRef} />
      <HeroSection />
      <hr ref={workRef} />
      <AmaronSection />
      <hr />
      <AmaronSection />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
