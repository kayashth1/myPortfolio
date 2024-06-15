import React from 'react';
import '../Skills/Skill.css';
import htmlLogo from '../../images/html.png'; // Add paths to your technology images
import cssLogo from '../../images/css.png';
import jsLogo from '../../images/js.png';
import reactLogo from '../../images/react.png';
import nodeLogo from '../../images/node.png';
import githubLogo from '../../images/github.png';
import jqLogo from '../../images/jquery.png';
import apilogo from '../../images/api.png';
import expressLogo from '../../images/express.png';
import mongoLogo from '../../images/monogodb.png';
import cpp from '../../images/cpp.png';
import postmanLogo from '../../images/postman.png';
import bootstrap from '../../images/bootstrap.png';
import firebase from '../../images/firebase.png';

function Skill() {
  return (
    <div className='skills-section'>
        <div className='skill-container'>

    

      <div className='skill-h'>
<h3>I have worked with !</h3>
</div>
        <div className='tech-images'>
       
          <img src={htmlLogo} alt="HTML" className='tech-logo' />
          <img src={cssLogo} alt="CSS" className='tech-logo' />
          <img src={jsLogo} alt="JavaScript" className='tech-logo' />
          <img src={reactLogo} alt="React" className='tech-logo' />
          <img src={nodeLogo} alt="Node.js" className='tech-logo' />
          <img src={apilogo} alt="Express" className='tech-logo' />
          <img src={jqLogo} alt="MongoDB" className='tech-logo' />
          <img src={mongoLogo} alt="MongoDB" className='tech-logo' />
          <img src={expressLogo} alt="MongoDB" className='tech-logo' />
          <img src={postmanLogo} alt="MongoDB" className='tech-logo' />
          <img src={cpp} alt="MongoDB" className='tech-logo' />
          <img src={bootstrap} alt="MongoDB" className='tech-logo' />
          <img src={firebase} alt="MongoDB" className='tech-logo' />
          <img src={githubLogo} alt="MongoDB" className='tech-logo' />
        </div>
      </div>
      </div>
    
  );
}

export default Skill;
