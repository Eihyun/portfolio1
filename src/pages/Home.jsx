// styling
import "./Home.css";

// global
import Header from "../global/Header";
import Footer from "../global/Footer";

// components
import RainbowBar from "../assets/components/RainbowBar";
import Icons from "../assets/components/Icons";
import AboutBtn from '../assets/components/AboutBtn';
import FuzzyText from '../assets/components/FuzzyText';
import Magnet from '../assets/components/Magnet';

// images
import HomeBannerVhs from "../assets/images/home-banner_vhs.svg";
import HomeTv from "../assets/images/home-tv.png";

function Home() {

    return(
        <>
            <div className="container">
                {/* Banner */}
                <div className="grid vertical-center home-banner">
                    <div className="col-8-lg col-8-md col-4-sm">
                        <div className="home-banner_text">

                            <h2 className="h2 loos-extended fw-8 home-banner_beKind">
                            {/* <FuzzyText baseIntensity={0.18} > */}
                                Be Kind, 
                            {/* </FuzzyText> */}
                                <span className="loos-wide fw-8 home-banner_sayHi">Say Hi</span>
                            </h2>

                            <div className="home-banner_rainbow">
                                <RainbowBar />
                            </div>
                        </div>
                    </div>
                    <div className="col-3-lg col-3-md col-3-sm">
                    </div>
                    <div className="col-1-lg col-1-md col-1-sm home-banner_icons">
                        <Icons />
                    </div>
                    <div className="col-3-lg col-2-md col-3-sm home-banner_cta">
                        <Magnet padding={500} disabled={false} magnetStrength={4}>
                            <AboutBtn />
                        </Magnet>
                    </div>
                    <div className="col-9-lg col-12-md col-4-sm">
                        <img src={HomeBannerVhs} alt="" />
                    </div>
                </div>

                {/* Featured Projects */}
                <div className="container">
                    <div className="grid vertical-center home-featured">
                        <div className="col-12-lg col-12-md home-featured_text fw-8">
                            <h2 className="h2 loos-extended home-featured_text-featured">Featured
                                <span className="loos-wide home-featured_text-projects">Projects</span>
                            </h2>
                        </div>
                        <div className="col-12-lg">
                            <img src={HomeTv} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;