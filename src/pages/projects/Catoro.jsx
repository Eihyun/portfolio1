import "./ProjectDetail.css";

import CatoroPreview from '../../assets/images/Catoro_Preview.png';
import CatoroDesignOverview from '../../assets/images/Catoro_DesignOverview.png';
import CatoroCompetitiveAnalysis from '../../assets/images/Catoro_CompetitiveAnalysis.png';
import TagHole from '../../assets/images/tag-hole.svg';

function Catoro() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center project-preview_container">
                    <div className="col-12-md col-4-sm mt-4 project-preview">
                        <img src={CatoroPreview} alt="" />
                    </div>
                    <a href="" className="col-3-md col-2-sm col-1-sm repository">
                        <img src={TagHole} className="tag-hole"  alt="" />
                        <div className="repository-text noka fw-6">Code</div>
                    </a>
                    <a href="" className="col-3-md col-2-sm col-1-sm live-site">
                        <img src={TagHole} className="tag-hole"  alt="" />
                        <div className="live-site_text noka fw-6">Live site</div>
                    </a>
                    <div className="col-6-md col-4-sm project-title">
                        <div className="project-title_container noka fw-8">Project Name
                            <h2 className="project-title_text pretendard fw-6">Catoro Case Study</h2>
                        </div>
                    </div>
                </div>

                <div className="grid vertical-center project-detail_container">
                    <div className="col-12-md col-4-sm project-detail">
                        <div className="overview pretendard">
                            <p>I created a case study for UI/UX Strategy course using Figma. The main purpose of this project is to improve several usability issues the current adoption process on the <span>Catoro Cat Café</span> website, particularly around cat profile navigation and the application form.</p>
                            <img src={CatoroDesignOverview} alt="" />
                            <p>Catoro Cat Café’s online adoption process needed significant UX improvements to enhance usability, streamline navigation, and simplify the form submission. The goal was to create an intuitive, visual, and smooth user experience to improve adoption conversion rates and overall user satisfaction.</p>
                            
                        </div>

                        <div className="tech-info">
                            <div className="tech-info_title noka fw-6">Technical info</div>
                            <table className="tech-info_tools loos-normal">
                                <tbody>
                                    <tr>
                                        <th>Design</th>
                                        <td>Figma</td>
                                    </tr>
                                    <tr>
                                        <th>Develop</th>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Challenges</h3>
                            <p>Users struggle with a fragmented process, navigating between cat profiles and the adoption form. The form must be easy to complete to improve the adoption rate. Users need a straightforward process to view and apply for the cats they are interested in, with all necessary information in one place. </p>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Competitive Analysis</h3>
                            <p>The current adoption process on the Catoro Cat Café website suffers from inconsistent navigation, a lack of visual cohesion, and an outdated form design.</p>
                            <img src={CatoroCompetitiveAnalysis} alt="" />
                            <p>A review of competitor platforms such as the BC SPCA and Adopt a Pet highlights several best practices: clean, intuitive navigation, visually appealing layouts.</p>
                            <p>Competitors also excel in offering filters to help users find pets that match their preferences quickly. These insights emphasize the need for Catoro to adopt a cohesive design language, simplify the adoption process, and enhance the user experience with visual and functional updates.</p>
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