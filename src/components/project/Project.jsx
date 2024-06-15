import React from 'react';
import '../project/project.css';
import githubIcon from '../../images/github.png';
import Reveal from '../Reveal';
import liveIcon from '../../images/live.png';
import projectImage from '../../images/cnf.png'; // This should be dynamic as well

const Project = ({ name, content, profile, no, image, GitHub, demo }) => {
    return (
        <div className="project-section">
            <div className="project">
                <div className="project-details">
                    <Reveal>
                    <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}>{no}</p>
                    </Reveal>
                    <Reveal>
                    <h2>{name}</h2>
                    </Reveal>
                    <Reveal>
                    <h3><span style={{background: "#ffffad"}}>{profile}</span></h3>
                    </Reveal>
                    <Reveal>
                    <p>{content}</p>
                    </Reveal>
                    <Reveal>
                    <div className="project-buttons">
                        <a href={GitHub} className="button github-button" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" /> GitHub
                        </a>
                        <a href={demo} className="button live-button" target="_blank" rel="noopener noreferrer">
                            <img src={liveIcon} alt="Live Project" /> Live Project
                        </a>
                    </div>
                    </Reveal>
                </div>
                {/* <div className="project-image"> */}
                {/* <Reveal> */}
                    <img className="project-image" src={image} alt="Project" />
                    {/* </Reveal> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Project;
