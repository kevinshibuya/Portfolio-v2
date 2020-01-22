import React from 'react';

import './Carousel.css';

function Carousel({ project }) {
    return (
        <div className="project-item hover">
            <img className="project-img" src={project.img} alt={project.name} />
            <div className="project-details">
                <span className="project-techs">{project.techs.join(', ')}</span>
                <h1 className="project-name">{project.name}</h1>
                <p className="project-description">{project.description}</p>
                <a className="project-link secondary-button button hover link-button" href={project.link} target="_blank">Ler mais</a>
            </div>
        </div>
    )
}

export default Carousel;