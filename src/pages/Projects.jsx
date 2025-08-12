import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Projects.css";

import VhsCover from '../assets/components/VhsCover';
import ThumbBlank from '../assets/images/Thumb_blank.gif';

function Projects() {
    const [projects, setProjects] = useState([]);

    const getLinkLable = (type) => {
        switch (type) {
            case "development":
                return "Live site";
            case "design" :
                return "Figma";
            default:
                return "View";
        }
    }

    const getGitHubLabel = (type) => {
        switch (type) {
            case "development":
                return "GitHub";
            case "design" :
                return null;
            default:
                return "View";
        }
    }

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
            <section className="container">
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
                            <h2 className="project-name fw-6 kyrial">{project.name}</h2>
                            <div className="project-link pretendard">
                                <p>
                                    <a href={project.url}
                                    target='_blank'
                                    className="project-name project-live fw-6">
                                    {getLinkLable(project.type)}
                                    </a>
                                </p>
                                <p>
                                {getGitHubLabel(project.type) && 
                                    <a href={project.github}
                                    target='_blank'
                                    className="project-name project-github fw-6">
                                    {getGitHubLabel(project.type)}
                                    </a>
                                }
                                </p>
                                <p>
                                <Link to={`/projects/${project.link}`} 
                                onClick={() => {window.scroll(0,0)}} 
                                className="project-case fw-6">Case study</Link>
                                </p>
                            </div>
                        </li>
                        ))}
                        <li className="project-item project-item-blank">
                            <div className="project-image blank">
                                <p className="pretendard">To be continued...</p>
                                <img src={ThumbBlank} alt="" />
                            </div>
                            <h2 className="project-name fw-6 kyrial">New Project</h2>
                        </li>
                        {/* <li className="project-item-blank"></li> */}
                    </ul>
                </div>
            </section>
        </>
    )

}

export default Projects;