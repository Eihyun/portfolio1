import "./ProjectDetail.css";

import WickedPreview from '../../assets/images/Wicked_Preview.jpeg';
import TagHole from '../../assets/images/tag-hole.svg';

function Wicked() {

    return(
        <>
            <title>Check out: Wicked Website</title>
            <div className="container">
                {/* Project Overview */}
                <div className="grid vertical-center project-preview_container">
                    <div className="col-12-md col-4-sm mt-4 project-preview">
                        <img src={WickedPreview} alt="" />
                    </div>
                    <a href="https://github.com/Eihyun/MDIA1472_Assign1"  target="_blank" className="col-3-md col-2-sm repository"> 
                            <img src={TagHole} className="tag-hole" alt="" />
                            <div className="repository-text noka fw-6">Code</div>
                    </a>
                    <a href="#" className="col-3-md col-2-sm live-site">
                        <img src={TagHole} className="tag-hole" alt="" />
                        <div className="live-site_text noka fw-6">Live site</div>
                    </a>
                    <div className="col-6-md col-4-sm project-title">
                        <div className="project-title_container noka fw-8">Project Name
                            <h2 className="project-title_text pretendard fw-6">Wicked Film Webpage</h2>
                        </div>
                    </div>
                </div>

                {/* Project Detail */}
                <div className="grid vertical-center project-detail_container">
                    <div className="col-12 project-detail">
                        <div className="overview pretendard">
                            <p>I designed and developed a responsive webpage for <span>Wicked &#40;2024&#41; film</span>, reflecting its magical tone while following the specified layout requirements &#40;flexbox, grid, responsive design, and semantic HTML&#41;.</p>
                            <p>The project aimed to create a responsive promotional webpage using a provided wireframe. The objective was to design a site that not only met the tchnical specifications but also conveyed the dark, whimsical atmosphere of the film.</p>
                        </div>

                        <div className="tech-info">
                            <div className="tech-info_title noka fw-6">Technical info</div>
                            <table className="tech-info_tools loos-normal">
                                <tr>
                                    <th>Design</th>
                                    <td>Adobe Photoshop</td>
                                </tr>
                                <tr>
                                    <th>Develop</th>
                                    <td>HTML, CSS</td>
                                </tr>
                            </table>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Challenges</h3>
                            <p>The biggest challenge was applying the concepts of CSS grid and flexbox effectively. The wireframe required using grid for most of the content, but flexbox for the header, menu, and footer. I was still getting familiar with how these two layout systems interacted, and it took some experimentation to ensure they worked together smoothly. Additionally, optimizing images for responsiveness was a new concept, so making sure the page loaded efficiently across different devices added another layer of difficulty. </p>
                        </div>

                        <div className="solutions pretendard">
                            <h3 className="fw-8">Solutions</h3>
                            <p>To address the challenge of balancing structure with creativity, I followed the wireframe while layering in the Wicked theme through color choices and design elements. The grid layout provided structure and consistency, while flexbox allowed for fluidity in the header and footer. The result was a visually immersive webpage that was both functional and engaging, staying true to the essence of the movie. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Wicked;