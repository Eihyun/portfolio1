import "./About.css";

import Header from "../global/Header"
import Footer from "../global/Footer"

function About() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center mt-8 about-intro">
                    <div className="col-5">
                        <div className="placeholder"></div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6 loos-wide fw-4 about-intro_text">
                        <p>Hello! I'm Eihyun.</p>
                        <p>I’m a creative and detail-oriented <span>front-end web developer</span> with a strong foundation in Media Communications. </p>
                        <p>I have experience in video production, social media, and content strategy, which has helped me create engaging digital content that connects with people.</p>
                        <p>I deepened my technical expertise as a student in the <span>New Media Design and Web Development</span> program at BCIT. I’m passionate about continuously learning and refining my skills to build intuitive websites and applications that deliver seamless user experiences.</p>
                    </div>
                </div>

                <div className="grid vertical-center mt-8 about-skills">
                    
                </div>

                <div className="grid vertical-center mt-8 about-pronun">
                    <div className="col-12">
                        <h2 className="loos-wide">How to pronounce?</h2>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;