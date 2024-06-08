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
import postmanLogo from '../../images/postman.png';

function Skill() {
  return (
    <div className='skills-section'>
        <div className='skill-container'>

    

      <div className='skill-h'>
<h3>Technologies I have !</h3>
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
        </div>
      </div>
      </div>
    
  );
}

export default Skill;
