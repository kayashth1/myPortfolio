import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbar/navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        logo
      </div> */}
      <div className="nav-links">
      <a className="nav-link" activeClassName="active-link" to="/contact">Contact</a>
        <a className="nav-link" activeClassName="active-link" to="/about">About</a>
        <a className="nav-link" activeClassName="active-link" to="/project">Project</a>
        <a className="nav-link" activeClassName="active-link" to="/skill">Skill</a>
      </div>
    </nav>
  );
}

export default Navbar;
