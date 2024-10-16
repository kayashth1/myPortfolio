import React from 'react';
import '../About/About.css';
import dp from '../../images/MyDp.jpg';
import karate from '../../images/karate.png'
import video from '../../images/video-camera.png'
import music from '../../images/music.png'
import ngo from '../../images/public-service.png'
import Reveal from '../Reveal';

function About() {
  return (
    <>
      <div className='about-body'>
        {/* <h2 className='abt-h'>About</h2> */}
        <div className='about-section'>
          <div className='abt-left'>
            <div className='abt-left-up'>
              <Reveal>
              <img src={dp} alt="Profile" className='profile-img' />
              </Reveal>
              <ul>
              <Reveal>
                <li><b className='h-tag'>Name:</b> Yash Shrivastava</li>
                </Reveal>
                <Reveal>
                <li><b className='h-tag'>Profile:</b> Full Stack Developer</li>
                </Reveal>
                <Reveal>
                <li><b className='h-tag'>Education:</b> Bachelor of Technology,</li>
                <li>IIT(ISM) Dhanbad <span style={{background:"#ffffad"}}>(In Progress)</span></li>
                </Reveal>
                <Reveal>
                <li className='h-tag'><b>Email:</b> yashkrshri2004outlook.com</li>
                </Reveal>
              </ul>
            </div>
            <Reveal>
            <div className='abt-left-down'>
         
          <div class="icon-container">
        <div class="icon-card" id="karate">
            <img src={karate} alt="Karate"/>
            <div class="card-details">
                <h3>Karate</h3>
                <p>I am an active member of the Karate Club, the official martial arts club of IIT (ISM) Dhanbad, and I currently hold a green belt.</p>
            </div>
        </div>
        <div class="icon-card" id="videography">
            <img src={video}  alt="Videography"/>
            <div class="card-details">
                <h3>Videography</h3>
                <p>I love to Capture Moments.
                  Can't reveal more ha ha ha!
                </p>
            </div>
        </div>
        <div class="icon-card" id="music">
            <img src={music}  alt="Music"/>
            <div class="card-details">
                <h3>Music</h3>
                <p>Music is Love.</p>
            </div>
        </div>
        <div class="icon-card" id="social-service">
            <img src={ngo} alt="Social Service"/>
            <div class="card-details">
                <h3>Social Service</h3>
                <p>I am part of an NGO named Kartavya, where we teach underprivileged children and work towards transforming their community.</p>
            </div>
        </div>
    </div>
        </div>
        </Reveal>
          </div>

          <div className='abt-right'>
          <Reveal>
            <h2>So! Who Am I?</h2>
            </Reveal>
            <Reveal>
            <p>Greetings! I'm Yash Shrivastava from Kanpur, Uttar Pradesh. Currently, I am in my pre-final year of B.Tech at the esteemed IIT (ISM) Dhanbad. Over the past two years, I've embarked on an exciting journey in the realm of programming, with a primary focus on web development.
In my free time, I indulge in music and social services. I am a driven, creative, and passionate individual dedicated to making a positive impact through technology. Additionally, I love solving problems, both in software and in social contexts, and strive to contribute meaningfully wherever I can.</p>
</Reveal>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default About;
