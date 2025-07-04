import { Link } from 'react-router-dom';

import "./Projects.css";

import CardFlip from '../assets/components/CardFlip'

import YogurtFront from '../assets/images/project-yogurt.png';
import YogurtBack from '../assets/images/project-yogurt_b.png';
import CatoroFront from '../assets/images/project-catoro.png';
import CatoroBack from '../assets/images/project-catoro_b.png';
import STOFront from '../assets/images/project-savetheocean.png';
import STOBack from '../assets/images/project-savetheocean_b.png';


const project = [
    {
        "id": "yogurt",
        "name": "Yogurt Yoghurt Yogurté",
        "frontImage": "project-yogurt.png",
        "backImage": "project-yogurt_b.png",
        "link": "yogurt"
    },
    {
        "id": "catoro",
        "name": "Catoro Case Study",
        "frontImage": "project-catoro.png",
        "backImage": "project-catoro_b.png",
        "link": "catoro"
    },
    {
        "id": "savetheocean",
        "name": "Save the Ocean",
        "frontImage": "project-savetheocean.png",
        "backImage": "project-savetheocean_b.png",
        "link": "savetheocean"
    }
];

const imageMap = {
    'project-yogurt.png': YogurtFront,
    'project-yogurt_b.png': YogurtBack,
    'project-catoro.png': CatoroFront,
    'project-catoro_b.png': CatoroBack,
    'project-savetheocean.png': STOFront,
    'project-savetheocean_b.png': STOBack,
};

function Projects() {

    return(
        <>
            <title>Eihyun's Cooool Projects</title>
            <meta name="description" content="Explore featured web development projects by Eihyun Kim."/>
            <div>
                <div className="grid">
                    <h1 className="col-12-md col-4-sm project-page_title loos-wide fw-6">Featured Projects</h1>
                    <div className="col-12-md col-4-sm project-list">

                        {project.map(project => (
                            <Link 
                            to={`/${project.link || project.id}`} 
                            key={project.id} 
                            className="card-link"
                            onClick={() => {
                                window.scroll(0,0)
                            }}
                            >
                                <CardFlip project={project} imageMap={imageMap} />
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )

}

export default Projects;