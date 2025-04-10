import "./ProjectDetail.css";

import CatoroPreview from '../assets/images/Catoro_Preview.png';
import CatoroDesignOverview from '../assets/images/Catoro_DesignOverview.png';
import CatoroCompetitiveAnalysis from '../assets/images/Catoro_CompetitiveAnalysis.png';
import TagHole from '../assets/images/tag-hole.svg';

function Catoro() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center project-preview_container">
                    <div className="col-12 mt-8 project-preview">
                        <img src={CatoroPreview} alt="" />
                    </div>
                    <div className="col-3 repository">
                        <a href="https://github.com/Eihyun/MDIA1472_Assign1">
                            <img src={TagHole} alt="" />
                            <div className="repository-text noka fw-6">Code</div>
                        </a>
                    </div>
                    <div className="col-3 live-site">
                        <a href="">
                            <img src={TagHole} alt="" />
                            <div className="live-site_text noka fw-6">Live site</div>
                        </a>
                    </div>
                    <div className="col-6 project-title">
                        <div className="project-title_container noka fw-8">Project Name
                            <h2 className="project-title_text pretendard fw-6">Catoro Case Study</h2>
                        </div>
                    </div>
                </div>

                <div className="grid vertical-center project-detail_container">
                    <div className="col-12 project-detail">
                        <div className="overview pretendard">
                            <p>I created a case study for UI/UX Strategy course using Figma. The main purpose of this project is to improve several usability issues the current adoption process on the <span>Catoro Cat Café</span> website, particularly around cat profile navigation and the application form.</p>
                            <img src={CatoroDesignOverview} alt="" />
                            <p>Catoro Cat Café’s online adoption process needed significant UX improvements to enhance usability, streamline navigation, and simplify the form submission. The goal was to create an intuitive, visual, and smooth user experience to improve adoption conversion rates and overall user satisfaction.</p>
                            <img src={CatoroCompetitiveAnalysis} alt="" />
                        </div>

                        <div className="tech-info">
                            <div className="tech-info_title noka fw-6">Technical info</div>
                            <table className="tech-info_tools loos-normal">
                                <tr>
                                    <th>Design</th>
                                    <td>Figma</td>
                                </tr>
                                <tr>
                                    <th>Develop</th>
                                    <td>-</td>
                                </tr>
                            </table>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Challenges</h3>
                            <p>Users struggle with a fragmented process, navigating between cat profiles and the adoption form. The form must be easy to complete to improve the adoption rate. Users need a straightforward process to view and apply for the cats they are interested in, with all necessary information in one place. </p>
                        </div>

                        <div className="solutions pretendard">
                            <h3 className="fw-8">Solutions</h3>
                            <p>The application process is aimed to be streamlined by integrating the cat profiles directly into the adoption form. Visual elements like images and descriptions were used to keep the users engaged, and an easy-to-follow user journey with minimal friction points was provided.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Catoro;