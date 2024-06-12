import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCode, FaWhatsapp } from 'react-icons/fa';
import '../navbar/TopNav.css';

const TopNav = () => {
  return (
    <div className="navbar">
      <div className="social-icons">
        <a href='https://github.com/kayashth1' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='icon' />
        </a>
        <a href='https://linkedin.com/in/kayashth1' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='icon' />
        </a>
        <a href='tel:+919935407772' target='_blank' rel='noopener noreferrer'>
          <FaPhone className='icon' />
        </a>
        <a href='https://wa.me/919935407772' target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp className='icon' />
        </a>
      </div>
      <div className="download-resume">
        <button className="resume-button">My resume</button>
      </div>
    </div>
  );
};

export default TopNav;