import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../navbar/navbar.css';

const Navbar = ({ activeSection, handleSetActive, menuOpen, toggleMenu }) => {
  return (
    <nav className={`side-nav ${menuOpen ? 'open' : ''}`}>
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <ScrollLink to="home" spy={true} smooth={true} duration={500} onSetActive={() => handleSetActive('home')}>
            Home
          </ScrollLink>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} onSetActive={() => handleSetActive('about')}>
            About
          </ScrollLink>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <ScrollLink to="projects" spy={true} smooth={true} duration={500} onSetActive={() => handleSetActive('projects')}>
            Projects
          </ScrollLink>
        </li>
        <li className={activeSection === 'footer' ? 'active' : ''}>
          <ScrollLink to="footer" spy={true} smooth={true} duration={500} onSetActive={() => handleSetActive('footer')}>
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
