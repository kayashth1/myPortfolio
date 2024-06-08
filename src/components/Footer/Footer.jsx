import React from 'react';
import '../Footer/Footer.css';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaCode } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer'>
      <div className='footer-left'>
        <h3>Yash Shrivastava</h3>
        <p>Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Fugiat, laborum Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className='social-icons'>
          <a href='https://github.com/kayashth1' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='icon' />
          </a>
          <a href='https://linkedin.com/in/kayashth1' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='icon' />
          </a>
          <a href='tel:+919935407772' target='_blank' rel='noopener noreferrer'>
            <FaPhone className='icon' />
          </a>
          <a href='mailto:22je1101@iitism.ac.in' target='_blank' rel='noopener noreferrer'>
            <FaEnvelope className='icon' />
          </a>
          <a href='https://leetcode.com/yourusername' target='_blank' rel='noopener noreferrer'>
            <FaCode className='icon' />
          </a>
          <a href='https://wa.me/919935407772' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp className='icon' />
          </a>
        </div>
      </div>
      <div className='footer-right'>
        <form className='contact-form'>
        <h2>Lets talk</h2>
          <input type='text' placeholder='Your Name' className='form-input' />
          <textarea placeholder='Your Message' className='form-textarea'></textarea>
          <button type='submit' className='form-button'>Send Mail</button>
        </form>
      </div>
    </div>
    <div className='footer-map'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.881046555905!2d80.31054920967145!3d26.40800474679272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c465aafe59caf%3A0x84f3ee9a48bfe3a4!2sHanumant%20Vihar%2C%20Damodar%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208021!5e0!3m2!1sen!2sin!4v1717759285564!5m2!1sen!2sin"width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>7/180 ,Hanumant Vihar, Kanpur, Uttar Pradesh, India.</div>
    </div>
    <div className='tag'>© 2024 Yash Shrivastava, Indian Institute Of Technology (ISM), Dhanbad.</div>
    </div>
  );
}

export default Footer;
