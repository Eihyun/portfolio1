// React, hook
import React, { useState } from 'react';
import { Link } from "react-router";

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
import Wicked from '../assets/images/project-wicked.png';
import Catoro from '../assets/images/project-catoro.png';
import Yogurt from '../assets/images/project-yogurt.png';

function Home() {
    const [hoveredCta, setHoveredCta] = useState(false);

    const handleMouseEnter = () => {
        setHoveredCta(true);
    }

    const handleMouseLeave = () => {
        setHoveredCta(false);
    }

    return(
        <>
            <div className="container">
                {/* Banner */}
                <div className="grid vertical-center home-banner">
                    <div className="col-8-md col-4-sm">
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
                    <div className="col-3-md col-3-sm">
                    </div>
                    <div className="col-1-md col-1-sm home-banner_icons">
                        <Icons />
                    </div>
                    <div className="col-4-lg col-2-md col-4-sm home-banner_cta-container">
                        {hoveredCta && (
                        <div className="home-banner_cta"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            <Magnet padding={500} disabled={false} magnetStrength={20}>
                                <AboutBtn />
                            </Magnet>
                        </div>
                    )}
                    </div>

                    <div className="col-8-lg col-9-md col-4-sm home-banner_vhs">
                        <img
                            src={HomeBannerVhs}
                            alt=""
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>

                </div>

                {/* Featured Projects */}
                <div className="container mt-3">
                    <div className="grid vertical-center home-featured">
                        <div className="col-12-md col-4-sm fw-8 home-featured_text">
                            <h2 className="h2 loos-extended home-featured_text-featured">Featured
                                <span className="loos-wide home-featured_text-projects">Projects</span>
                            </h2>
                        </div>
                        <div className="col-12-md col-4-sm home-featured_tv">
                            {/* <img src={HomeTv} alt="" /> */}

                        </div>
                        
                        {/* <div className="col-12-md col-4-sm home-featured_item"> */}
                            <Link to={"/wicked"} className="col-6-md col-4-sm home-featured_item">
                                <img src={Wicked} alt="" />
                            </Link>
                            <Link to={"/yogurt"} className="col-6-md col-4-sm home-featured_item">
                                <img src={Yogurt} alt="" />
                            </Link>
                            <Link to={"/catoro"} className="col-6-md col-4-sm home-featured_item">
                                <img src={Catoro} alt="" />
                            </Link>

                        {/* </div> */}
                        <div className="project-cta col-12-md col-4-sm mt-5 mb-8">
                            <Link to={"/projects"} onClick={() => {
                                window.scroll(0,0)
                            }} >
                                <div className="view-more loos-compressed">
                                    View More
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;