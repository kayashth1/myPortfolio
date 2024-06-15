import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';

import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skill from './components/Skills/Skill'
import Footer from './components/Footer/Footer'
import TopNav from './components/navbar/TopNav';
import Projects from './components/project/Projects'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    const handleBodyClick = (event) => {

      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };


    document.body.addEventListener('click', handleBodyClick);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [menuOpen]);

  const handleSetActive = (to) => {
    setActiveSection(to);

    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        handleSetActive={handleSetActive}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        className={`side-nav ${menuOpen ? 'open' : ''}`}
      />
        
      <div className="content">
        <TopNav menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Element name="home" className="section nopd">
          <Home />
        </Element>
        <Element name="about" className="section">
          <About />
        </Element>
        <Element name="skills" className="section">
          <Skill />
        </Element>
        <Element name="projects" className="section">
          <Projects />
        </Element>
        <Element name="footer" className="section nopd">
          <Footer />
        </Element>
      </div>
    </div>
  );
}

export default App;
