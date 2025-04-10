import "./ProjectDetail.css";

import WickedPreview from '../assets/images/Wicked_Preview.png';
import YogurtPreview from '../assets/images/Yogurt_Preview.png';
import TagHole from '../assets/images/tag-hole.svg';

function Yogurt() {


    return(
        <>
            <div className="container">
                <div className="grid vertical-center project-preview_container">
                    <div className="col-12 mt-8 project-preview">
                        <img src={YogurtPreview} alt="" />
                    </div>
                    <div className="col-3 repository">
                        <a href="https://github.com/Eihyun/MDIA2294-TermProject" target="_blank">
                            <img src={TagHole} alt="" />
                            <div className="repository-text noka fw-6">Github</div>
                        </a>
                    </div>
                    <div className="col-3 live-site">
                        <a href="https://yogurt.eihyunkim.com/" target="_blank">
                            <img src={TagHole} alt="" />
                            <div className="live-site_text noka fw-6">Live site</div>
                        </a>
                    </div>
                    <div className="col-6 project-title">
                        <div className="project-title_container noka fw-8">Project Name
                            <h2 className="project-title_text pretendard fw-6">Wicked Film Webpage</h2>
                        </div>
                    </div>
                </div>

                <div className="grid vertical-center project-detail_container">
                    <div className="col-12 project-detail">
                        <div className="overview pretendard">
                            <p>I designed and developed a responsive, mobile-first website for <span>a fictional frozen yogurt shop called Yogurt Yoghurt Yoghurt Yogurté</span>, inspired by its appearance on the tv series <span>The Good Place</span>. The website needed to showcase various frozen yogurt flavors, provide contact information, and ensure a seamless user experience across mobile, tablet and desktop devices. </p>
                            <p>The project aimed to incorporate web design best practices, such as using wireframes, implementing responsive design with a grid system, and incorporating JavaScript plugins to enhance interactivity.</p>
                        </div>

                        <div className="tech-info">
                            <div className="tech-info_title noka fw-6">Technical info</div>
                            <table className="tech-info_tools loos-normal">
                                <tr>
                                    <th>Design</th>
                                    <td>Adobe Photoshop, Figma</td>
                                </tr>
                                <tr>
                                    <th>Develop</th>
                                    <td>HTML, CSS, Javascript</td>
                                </tr>
                            </table>
                        </div>

                        <div className="challenges pretendard">
                            <h3 className="fw-8">Challenges</h3>
                            <h4 className="fw-6">Plugin Integration</h4>
                            <p>While I was able to choose plugins that would enhance the user experience, I struggled with configuring them to work as intended.</p>
                            <h4 className="fw-6">Pixel Perfect Design</h4>
                            <p>Ensuring the website was particularly difficult since this was my first time designing wireframes and building a site to match then exactly. I had to focus on details like spacing, alignment, font sizes, and image placement to make sure the website looked the consistent across all devices.</p>
                        </div>

                        <div className="solutions pretendard">
                            <h3 className="fw-8">Solutions</h3>
                            <p>To deal with the plugin issues, I spent additional time researching how to modify the settings to align with the desired look and functionality. After experimenting with various configurations, I was able to make the plugins work seamlessly. </p>
                            <p>For the pixel perfect design, I relied heavily on my wireframes in Figma to guide my layout and design decision. I used browser developer tools and chrome extensions to compare the live site with the wireframes and fine-tuned elements until everything aligned well. This process took time, but it allowed me to maintain a high level of precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Yogurt;