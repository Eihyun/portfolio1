import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Projects.css";

import VhsCover from '../assets/components/VhsCover';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
    }, []);

    return(
        <>
            <title>Eihyun's Awesome Projects</title>
            <meta name="description" content="Explore featured web development projects by Eihyun Kim."/>
            <div className="container">
                <div className="grid">
                    <h1 className="col-12-md col-4-sm project-page_title loos-wide fw-6">Featured Projects</h1>
                    <ul className="col-12-md col-4-sm mt-8 projects-list">
                        {projects.map(project => (
                        <li key={project.id} className="project-item">
                            <a href={project.url} 
                            target='_blank'
                            className="project-image">
                                <img src={project.image} /> 
                            </a>
                            <div className="project-link pretendard">
                                <p>
                                    <a href={project.url}
                                    target='_blank'
                                    className="project-name fw-6">
                                    {project.name}
                                    </a>
                                </p>
                                <p>
                                ✏️ <Link to={`/projects/${project.link}`} className="project-case">Case study</Link>
                                </p>
                            </div>
                        </li>
                        ))}
                        <li className="project-item-blank"></li>
                        <li className="project-item-blank"></li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Projects;