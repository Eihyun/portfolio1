import { Link } from 'react-router-dom';

import "./Projects.css";

import CardFlip from '../assets/components/CardFlip'

import WickedFront from '../assets/images/project-wicked.png';
import WickedBack from '../assets/images/project-wicked_b.png';
import YogurtFront from '../assets/images/project-yogurt.png';
import YogurtBack from '../assets/images/project-yogurt_b.png';
import CatoroFront from '../assets/images/project-catoro.png';
import CatoroBack from '../assets/images/project-catoro_b.png';


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
    // {
    //     "id": "wicked",
    //     "name": "Wicked Film Webpage",
    //     "frontImage": "project-wicked.png",
    //     "backImage": "project-wicked_b.png",
    //     "link": "wicked"
    // },
];

const imageMap = {
    'project-wicked.png': WickedFront,
    'project-wicked_b.png': WickedBack,
    'project-yogurt.png': YogurtFront,
    'project-yogurt_b.png': YogurtBack,
    'project-catoro.png': CatoroFront,
    'project-catoro_b.png': CatoroBack
};

function Projects() {

    return(
        <>
            <div className="container">
                <div className="grid">
                    <h1 className="col-12-md col-4-sm project-page_title loos-wide fw-6">Featured Projects</h1>
                    <div className="col-12-md col-4-sm project-list">

                        {project.map(project => (
                            <Link to={`/${project.link || project.id}`} key={project.id} className="card-link">
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