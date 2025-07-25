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
            <title>Eihyun's Cooool Projects</title>
            <meta name="description" content="Explore featured web development projects by Eihyun Kim."/>
            <div className="container">
                <div className="grid">
                    <h1 className="col-12-md col-4-sm project-page_title loos-wide fw-6">Featured Projects</h1>
                    <ul className="col-12-md col-4-sm project-list">

                        {projects.map(project => (
                        <li key={project.id} className="project-list-item">
                            <Link
                            to={`/projects/${project.link}`}
                            className="card-link"
                            onClick={() => window.scroll(0, 0)}
                            >
                                <h2 className="pretendard fw-6 mb-4">{project.name}</h2>
                                <VhsCover image={project.image} alt={`${project.name} VHS Cover`} />
                                <p className="pretendard fw-4 mt-4 mb-4">{project.description}</p>
                            </Link>
                        </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    )

}

export default Projects;