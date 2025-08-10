import { Link } from 'react-router-dom';
import "./ProjectDetail2.css";

import STOPreview from '../../assets/images/STO_Preview.png';
import TagHole from '../../assets/images/tag-hole.svg';

function SavetheOcean() {

    return(
        <section className="grid project-detail">
            <div className="col-12-md col-4-sm">
                <h1 className="case-title noka fw-6">Case Study: Save the Ocean</h1>
            </div>
            <div className="col-12-md col-4-sm case-body-container pretendard">
                <div className="case-body">
                    <div className="case-text">
                        <p>
                            <em>Visit the website to play:
                                <a href="https://savetheocean.eihyunkim.com" target="_blank" className="case-link">Save the Ocean</a>.
                            </em>
                        </p>
                    </div>
                </div>
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle">Goal</h2>
                    </div>
                </div>
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle">Goal</h2>
                    </div>
                </div>
                
                <nav className='projects-nav'>
                    <div className="previous">
                        <Link to="/projects/simpleclinic">⬅️ Previous</Link>
                    </div>
                    <div className="back">
                        <Link to="/projects">All Project</Link>
                    </div>
                    <div className="next">
                        <Link to="/projects/yogurt">Next ➡️</Link>
                    </div>
                </nav>

            </div>
        </section>

    )

}

export default SavetheOcean;