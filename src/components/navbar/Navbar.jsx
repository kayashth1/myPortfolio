import React from 'react';
import { NavLink } from 'react-router-dom';
// import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../navbar/navbar.css';

const Navbar = ({ activeSection, handleSetActive }) => {
  return (
    <nav className="side-nav">
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <ScrollLink to="home" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            Home
          </ScrollLink>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            About
          </ScrollLink>
        </li>
        
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <ScrollLink to="projects" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            Projects
          </ScrollLink>
        </li>
        <li className={activeSection === 'footer' ? 'active' : ''}>
          <ScrollLink to="footer" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

