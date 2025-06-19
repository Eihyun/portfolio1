import "./ProjectDetail.css";

import CatoroPreview from '../../assets/images/Catoro_Preview.jpeg';
import CatoroDesignOverview from '../../assets/images/Catoro_DesignOverview.jpeg';
import CatoroCompetitiveAnalysis from '../../assets/images/Catoro_CompetitiveAnalysis.jpeg';
import TagHole from '../../assets/images/tag-hole.svg';

function SavetheOcean() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center project-preview_container">
                    <div className="col-12-md col-4-sm mt-4 project-preview">
                        <img src={CatoroPreview} alt="" />
                    </div>
                    <a href="https://github.com/Eihyun/SavetheOcean" target='_blank' className="col-3-md col-2-sm col-1-sm repository">
                        <img src={TagHole} className="tag-hole"  alt="" />
                        <div className="repository-text noka fw-6">GitHub</div>
                    </a>
                    <a href="https://www.figma.com/proto/uKaGj9GKsSAi9GxwqsHjDF/UIUX-Project2?page-id=1%3A9&node-id=1-10&scaling=scale-down-width&content-scaling=fixed&t=KVGFabMX11TZNzlX-1" className="col-3-md col-2-sm col-1-sm live-site" target='_blank'>
                        <img src={TagHole} className="tag-hole"  alt="" />
                        <div className="live-site_text noka fw-6">Figma</div>
                    </a>
                    <div className="col-6-md col-4-sm project-title">
                        <div className="project-title_container noka fw-8">Project Name
                            <h2 className="project-title_text pretendard fw-6">Save the Ocean</h2>
                        </div>
                    </div>
                </div>

                <div className="grid vertical-center project-detail_container">
                    <div className="col-12-md col-4-sm project-detail">
                        <div className="overview pretendard">
                            <p>Save the Ocean is a browser-based game designed to raise awareness about marine pollution and proper recycling habits. The player takes on the role of an octopus tasked with sorting waste into the correct recycling bins. The core mechanic involves using arrow key inputs to sort items correctly under a time constraint, blending education with interactive gameplay. </p>
                            <img src={CatoroDesignOverview} alt="" />
                            <p>This project was a collaboration between me as a developer and a designer(Sally). Sally created all custom illustrations, while I focused on functionality, game logic, and interface behavior. We aligned game features with visual priorities through regular check-ins and shared Figma file. All game visuals, except the waste item icons, were hand-drawn by Sally in a colorful style to suit the target age group and maintain clarity. The recyclable items were sourced from Adobe Stock to save time and ensure instant recognizability.</p>
                            
                        </div>

                        <div className="tech-info">
                            <div className="tech-info_title noka fw-6">Technical info</div>
                            <table className="tech-info_tools loos-normal">
                                <tbody>
                                    <tr>
                                        <th>Design</th>
                                        <td>Figma, Procreate</td>
                                    </tr>
                                    <tr>
                                        <th>Develop</th>
                                        <td>HTML, CSS, JavaScript</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Game Logic and Technical Implementation</h3>
                            <p>A major technical challenge involved building conditional logic to handle the game’s multiple outcomes:
                                <ul>
                                    <li>Succeeding by sorting over 20 items within 60 seconds.</li>
                                    <li>Failing by losing all 3 hearts.</li>
                                    <li>Running out of time before sorting enough items.</li>
                                </ul>
                            These scenarios were managed using JavaScript conditionals tied to timers, score counters, and wrong count tracking. The game state is updated live, and feedback is provided through visual cues and sound effects. I wrote logic to freeze gameplay and reset state when any of the outcomes are triggered.</p>
                        </div>

                        <div className="solutions pretendard">
                            <h3 className="fw-8">User Testing</h3>
                            <p>I conducted several rounds of user testing to refine mechanics and flow. A common issue was that users weren’t aware they needed to use arrow keys. To solve this, I added an arrow key indicator directly into the interface. Another point of confusion was that players had to return to the home screen to start the game after reading the instructions. Based on this feedback, I added a start button to the instruction screen to improve the game flow and user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SavetheOcean;