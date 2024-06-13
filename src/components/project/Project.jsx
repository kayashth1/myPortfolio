import React from 'react';
import '../project/project.css';
import githubIcon from '../../images/github.png';
import liveIcon from '../../images/live.png';
import projectImage from '../../images/cnf.png'; // This should be dynamic as well

const Project = ({ name, content, profile, no, image, GitHub, demo }) => {
    return (
        <div className="project-section">
            <div className="project">
                <div className="project-details">
                    <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}>{no}</p>
                    <h2>{name}</h2>
                    <h3><span style={{background: "#ffffad"}}>{profile}</span></h3>
                    <p>{content}</p>
                    <div className="project-buttons">
                        <a href={`https://github.com/kayashth1/${GitHub}`} className="button github-button" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" /> GitHub
                        </a>
                        <a href={demo} className="button live-button" target="_blank" rel="noopener noreferrer">
                            <img src={liveIcon} alt="Live Project" /> Live Project
                        </a>
                    </div>
                </div>
                {/* <div className="project-image"> */}
                    <img className="project-image" src={image} alt="Project" />
                {/* </div> */}
            </div>
        </div>
    );
};

export default Project;
