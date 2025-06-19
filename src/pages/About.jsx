// styling
import "./About.css";

// components
import Pronounce from "../assets/components/Pronounce";

// images
// import myImg from "../assets/images/about-image.jpg";
// import myImg2 from "../assets/images/about-image2.jpeg";
import myImg3 from "../assets/images/about-image3.jpeg";
import logoMic from "../assets/images/Eihyun_mic.png";

function About() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center mt-4 about-intro">
                    <div className="col-5-lg col-8-md col-3-sm mb-4">
                        <div className="about-intro_img-container">
                            <img src={myImg3} className="about-intro_img" alt="" />
                        </div>
                    </div>
                    <div className="col-1-lg col-4-md col-1-sm">
                            <img src={logoMic} className="about-intro_img-logo"></img>
                    </div>

                    <div className="col-6-lg col-12-md col-4-sm pretendard fw-4 about-intro_text">
                        <p>Hello! I'm Eihyun.</p>
                        <p>I’m a creative and detail-oriented <span>front-end web developer</span> with a strong foundation in Media Communications. </p>
                        <p>I have experience in video production, social media, and content strategy, which has helped me create engaging digital content that connects with people.</p>
                        <p>I deepened my technical expertise as a student in the <span>New Media Design and Web Development</span> program at BCIT. I’m passionate about continuously learning and refining my skills to build intuitive websites and applications that deliver seamless user experiences.</p>
                    </div>
                </div>

                <div className="grid vertical-center mt-8 about-skills">
                    
                </div>

                <div className="grid vertical-center mt-8 about-pronun">
                    <div className="col-12-md col-4-sm about-pronun_text">
                        <h2 className="loos-wide fw-7">How to pronounce?</h2>
                        <h3 className="h3 loos-normal fw-5">If you want to learn how to actually pronounce my Korean name...</h3>
                    </div>
                    <div className="col-12-md col-4-sm about-pronun_break">
                        <Pronounce />
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;