import "./Home.css";

import Header from "../global/Header";
import Footer from "../global/Footer";
import RainbowBar from "../assets/components/RainbowBar";
import Icons from "../assets/components/Icons";

import FuzzyText from '../assets/components/FuzzyText';
import HomeBanner from "../assets/images/home-banner_vhs.svg";

function Home() {

    return(
        <>
            <div className="container">
                {/* Banner */}
                <div className="grid vertical-center home-banner">
                    <div className="col-8-lg">
                        <div className="home-banner_text">

                            <h2 className="h2 loos-extended home-banner_beKind">
                            {/* <FuzzyText baseIntensity={0.18}> */}
                                Be Kind, 
                            {/* </FuzzyText> */}
                                <span className="loos-wide home-banner_sayHi">Say Hi</span>
                            </h2>

                            <div className="home-banner_rainbow">
                                <RainbowBar />
                            </div>
                        </div>
                    </div>
                    <div className="col-3-lg">
                    </div>
                    <div className="col-1-lg home-banner_icons">
                        <Icons />
                    </div>
                    <div className="col-3-lg">
                    </div>
                    <div className="col-9-lg">
                        <img src={HomeBanner} alt="" />
                    </div>
                </div>

                {/* Featured Projects */}
                <div className="grid vertical-center home-featured">
                    <div className="col-12-lg home-featured_text">
                        <h2 className="h2 loos-extended">Featured 
                            <span className="loos-wide">Projects</span>
                        </h2>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;