import "./Projects.css";

import Wicked from '../assets/images/project-wicked.png';
import Catoro from '../assets/images/project-catoro.png';
import Yogurt from '../assets/images/project-yogurt.png';

function Projects() {

    return(
        <>
            <div className="container">
                <div className="grid">
                    <div className="col-12 project-list">
                        <div className="project-list_item">
                            <img src={Wicked} alt="" />
                            <h4 className="noka fw-6">Wicked Film Webpage</h4>
                        </div>
                        <div className="project-list_item">
                            <img src={Catoro} alt="" />
                            <h4 className="noka fw-6">Catoro Cat Café Case Study</h4>
                        </div>
                        <div className="project-list_item">
                            <img src={Yogurt} alt="" />
                            <h4 className="noka fw-6">Yogurt Yoghurt Yogurté</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Projects;