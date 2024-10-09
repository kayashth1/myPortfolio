import React from 'react';
import '../Footer/Footer.css';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaCode } from 'react-icons/fa';

function Footer() {
  return (
    
    <div className='footer-container'>
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Shoot me an email if you want to connect! You can also find me on <a className='s-l' href='https://linkedin.com/in/kayashth1' target='_blank' rel='noopener noreferrer'>Linkedin</a>  or  <a href="https://www.instagram.com/ka_yashth1/" className='s-l' target='_blank' rel='noopener noreferrer' >Instagram</a> if that's more your speed.</p>
      <a href="mailto:yashkrshri2004@outlook.com" className="email-link">
        <FaEnvelope className="icon" /> yashkrshri2004@outlook.com
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