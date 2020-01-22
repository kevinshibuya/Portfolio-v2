import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Carousel from '../Carousel/Carousel';

import './Projects.css';

function Projects() {
    const [projects, setProjects ] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const response = await api.get('/');

            setProjects(response.data);
        }

        loadProjects();
    }, []);

    return (
        <div className="container projects">
            <Link className="main-button button hover link-button" to="/admin">Admin</Link>
            <h1 className="title">Projetos</h1>
            <div className="carousel">
                {projects.map(project => (
                    <Carousel key={project._id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;