import React from 'react';
import '../About/About.css';
import dp from '../../images/MyDp.jpg';
import karate from '../../images/karate.png'
import video from '../../images/video-camera.png'
import music from '../../images/music.png'
import ngo from '../../images/public-service.png'

function About() {
  return (
    <>
      <div className='about-body'>
        <h2 className='abt-h'>About</h2>
        <div className='about-section'>
          <div className='abt-left'>
            <div className='abt-left-up'>
              <img src={dp} alt="Profile" className='profile-img' />
              <ul>
                <li><b>Name:</b> Yash Shrivastava</li>
                <li><b>Profile:</b> Full Stack Developer</li>
                <li><b>Education:</b> Bachelor of Technology,</li>
                <li>IIT(ISM) Dhanbad <span style={{background:"#ffffad"}}>(In Progress)</span></li>
                <li><b>Email:</b> 22je1101@iitism.ac.in</li>
              </ul>
            </div>
            <div className='abt-left-down'>
         
          {/* <div className='simple-left'>
            <button className='left-button'>Download CV</button>
           
          </div>
          <div className='simple-right'>
            <div className='education-content'>
              <h3>Education</h3>
              <p>Bachelor Of Technology</p>
              <p>IIT(ISM) Dhanbad <span>(In Progress)</span></p>
            </div>
          </div> */}
          <div class="icon-container">
        <div class="icon-card" id="karate">
            <img src={karate} alt="Karate"/>
            <div class="card-details">
                <h3>Karate</h3>
                <p>Karate is a martial art developed in the Ryukyu Kingdom. It is primarily a striking art using punching, kicking, knee strikes, and elbow strikes.</p>
            </div>
        </div>
        <div class="icon-card" id="videography">
            <img src={video}  alt="Videography"/>
            <div class="card-details">
                <h3>Videography</h3>
                <p>Videography is the process of capturing moving images on electronic media such as video tape, direct to disk recording, or solid state storage.</p>
            </div>
        </div>
        <div class="icon-card" id="music">
            <img src={music}  alt="Music"/>
            <div class="card-details">
                <h3>Music</h3>
                <p>Music is the art of arranging sounds in time to produce a composition through the elements of melody, harmony, rhythm, and timbre.</p>
            </div>
        </div>
        <div class="icon-card" id="social-service">
            <img src={ngo} alt="Social Service"/>
            <div class="card-details">
                <h3>Social Service</h3>
                <p>Social service is a service provided to help people in the community, especially those who are disadvantaged or need assistance.</p>
            </div>
        </div>
    </div>
        </div>
         
          </div>
          <div className='abt-right'>
            <h2>So! Who Am I?</h2>
            <p>Lorem ipsum dolor sit amet contio fuga ex ullam blanditiis eos quis! Laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus eos voluptatibus. Nostrum assumenda voluptate ipsum quam rem iure, illum expedita facere cumque consequuntur molestias suscipit temporibus magni ipsa, alias vitae tempora necessitatibus nulla illo inventore? Quis eum fugiat doloremque labore, quae voluptas enim iste deserunt ratione dolorum impedit sapiente.</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default About;
