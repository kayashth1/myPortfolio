import React from 'react';
import '../Footer/Footer.css';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaCode } from 'react-icons/fa';

function Footer() {
  return (
    
    <div className='footer-container'>
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Shoot me an email if you want to connect! You can also find me on <a className='s-l' href="">Linkedin</a>  or <a href="" className='s-l'>Instagram</a> if that's more your speed.</p>
      <a href="mailto:bob.ross@notreal.com" className="email-link">
        <FaEnvelope className="icon" /> bob.ross@notreal.com
      </a>
    </div>
      
    {/* <div className='tag'>© 2024 Yash Shrivastava, Indian Institute Of Technology (ISM), Dhanbad.</div> */}
    </div>
    
  );
}

export default Footer;

{/* <a href='mailto:22je1101@iitism.ac.in' target='_blank' rel='noopener noreferrer'>
<FaEnvelope className='icon' />
</a> */}