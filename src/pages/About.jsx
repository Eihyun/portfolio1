// styling
import "./About.css";

// components
import Pronounce from "../assets/components/Pronounce";
import StickerPeel from '../assets/components/StickerPeel';

// images
// import myImg from "../assets/images/about-image.jpg";
// import myImg2 from "../assets/images/about-image2.jpeg";
import myImg3 from "../assets/images/about-image3.jpeg";
import logoMic from "../assets/images/Eihyun_mic.png";
import logoReact from "../assets/logo/react.svg";
import logoJs from "../assets/logo/javascript.png";
import logoHtml from "../assets/logo/html.png";
import logoCss from "../assets/logo/css.png";
import logoPremiere from "../assets/logo/premiere.png";
import logoIllustrator from "../assets/logo/illustrator.png";
import logoPhotoshop from "../assets/logo/photoshop.png";
import logoFigma from "../assets/logo/figma.png";

function About() {

    return(
        <>
            <title>Learn More About Eihyun</title>
            <meta name="description" content="Learn about Eihyun Kim, a frontend developer focused on human-centered design." />
            <div className="container">
                <div className="grid vertical-center mt-4 about-intro">
                    <div className="col-5-lg col-8-md col-3-sm mb-4">
                        <div className="about-intro_img-container">
                            <img src={myImg3} className="about-intro_img" alt="Profile image of Eihyun Kim" />
                        </div>
                    </div>
                    <div className="col-1-lg col-4-md col-1-sm">
                        <img src={logoMic} className="about-intro_img-logo" alt="Eihyun Kim's Logo with a mic" />
                    </div>

                    <div className="col-6-lg col-12-md col-4-sm pretendard fw-4 about-intro_text">
                        <p>Hello! I'm Eihyun.</p>
                        <p>I’m a creative and detail-oriented <span>front-end web developer</span> with a strong foundation in Media Communications. </p>
                        <p>I have experience in video production, social media, and content strategy, which has helped me create engaging digital content that connects with people.</p>
                        <p>I deepened my technical expertise as a student in the <span>New Media Design and Web Development</span> program at BCIT. I’m passionate about continuously learning and refining my skills to build intuitive websites and applications that deliver seamless user experiences.</p>
                    </div>
                </div>

                <div className="grid vertical-center mt-8 about-skills">
                    <div className="col-12-md col-4-sm mt-8 about-skills_stickers">

                        <h2 className="loos-wide fw-7">Skills</h2>
                        <StickerPeel
                            imageSrc={logoReact}
                            width={200}
                            rotate={-3}
                            peelBackHoverPct={10}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 0, y: 70 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoJs}
                            width={200}
                            rotate={5}
                            peelBackHoverPct={20}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 180, y: 130 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoHtml}
                            width={200}
                            rotate={-2}
                            peelBackHoverPct={30}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 340, y: 90 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoCss}
                            width={200}
                            rotate={3}
                            peelBackHoverPct={20}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 490, y: 110 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoPremiere}
                            width={200}
                            rotate={-3}
                            peelBackHoverPct={30}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 650, y: 130 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoIllustrator}
                            width={200}
                            rotate={4}
                            peelBackHoverPct={30}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 800, y: 90 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoPhotoshop}
                            width={200}
                            rotate={-2}
                            peelBackHoverPct={30}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 950, y: 120 }}
                            className="stickers"
                        />
                        <StickerPeel
                            imageSrc={logoFigma}
                            width={200}
                            rotate={2}
                            peelBackHoverPct={30}
                            peelBackActivePct={40}
                            shadowIntensity={0.6}
                            lightingIntensity={0.1}
                            initialPosition={{ x: 1100, y: 100 }}
                            className="stickers"
                        />

                    </div>
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