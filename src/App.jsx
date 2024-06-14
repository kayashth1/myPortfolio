
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

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div className="App">
     
      <Navbar activeSection={activeSection} handleSetActive={handleSetActive} />
            
      <div className="content">
      <TopNav/>
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
          <Footer/>
        </Element>
      </div>
    </div>
  );
}

export default App;
