import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection';
import AmaronSection from './components/AmaronSection/AmaronSection';
import { useRef } from 'react';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div>
      <NavBar refProp={workRef} />
      <HeroSection />
      <hr id="work" />
      <AmaronSection />
      <hr />
      <AmaronSection />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
