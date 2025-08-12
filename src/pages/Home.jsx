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
import Magnet from '../assets/components/Magnet';

// images
import HomeBannerVhs from "../assets/images/home-banner_vhs.svg";
import Yogurt from "../assets/images/Yogurt_Preview.png";
import Catoro from "../assets/images/Catoro_Preview.png";
import STO from "../assets/images/STO_Preview2.png";
import VhsTape from '../assets/components/VhsTape';

function Home() {
    // Hover effect on banner Vhs to About page CTA
    const [hoveredCta, setHoveredCta] = useState(false);

    const handleMouseEnter = () => {
        setHoveredCta(true);
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setHoveredCta(false);
        }, 150);
    };

    // Preview Image on the TV
    const [hoveredId, setHoveredId] = useState(null);

    const getPreviewImage  = (id) => {
        switch (id) {
            case 'yogurt':
                return Yogurt;
            case 'catoro':
                return Catoro;    
            case 'savetheocean':
                return STO;
            default:
                return PlaceHolder;
        }
    };

    return(
        <>
            <section className="container">
                {/* Banner */}
                <div className="grid vertical-center home-banner">
                    <div className="col-8-md col-4-sm">
                        <div className="home-banner_text">

                            <h2 className="h2 kyrial fw-8 home-banner_beKind">
                                Be Kind, 
                                <span className="kyrial-cond fw-9 home-banner_span">build minds</span>
                            </h2>

                            <div className="home-banner_rainbow mt-2">
                                <RainbowBar />
                            </div>
                        </div>
                    </div>
                    <div className="col-3-md col-3-sm">
                    </div>
                    <div className="col-1-md col-1-sm home-banner_icons">
                        <Icons className="home-banner_icons" />
                    </div>
                    <div 
                    className="col-4-lg col-2-md col-4-sm home-banner_cta-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        {hoveredCta && (
                            <div className="home-banner_cta"
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                        >
                            <Magnet padding={400} disabled={false} magnetStrength={20}>
                                <AboutBtn />
                            </Magnet>
                        </div>
                    )}
                    </div>

                    <div className="col-8-lg col-9-md col-4-sm home-banner_vhs">
                        <img
                            src={HomeBannerVhs}
                            alt=""
                        />
                    </div>

                </div>

                {/* Featured Projects */}
                <div className="container">
                    <div className="grid vertical-center home-featured">
                        <div className="col-12-md col-4-sm fw-8 home-featured_text">
                            <h2 className="h2 loos-extended home-featured_text-featured">Featured
                                <span className="loos-wide home-featured_text-projects">Projects</span>
                            </h2>
                        </div>


                    </div>
                    <div className="home-projects mt-8">

                    <div className="home-featured_tv">
                        <div className="tv-screen">
                            <div className="tv-content">
                                {hoveredId ? (
                                    <img src={getPreviewImage(hoveredId)} alt="Project Preview" />
                                ) : (
                                    <div className="tv-text pretendard">
                                        Choose a VHS to preview →
                                    </div>
                                )}
                                <div className="tv-overlay"></div>
                                <div className="tv-noise"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="col-12-md col-4-sm home-featured_item"> */}
                    <Link 
                    to={"/projects/yogurt"} 
                    onClick={() => {
                        window.scroll(0,0)
                    }}
                    onMouseEnter={() => setHoveredId('yogurt')}
                    onMouseLeave={() => setHoveredId(null)}
                    className="home-featured_item">
                        <VhsTape id="yogurt"/>
                    </Link>
                    <Link 
                    to={"/projects/savetheocean"} 
                    onClick={() => {
                        window.scroll(0,0)
                    }}
                    onMouseEnter={() => setHoveredId('savetheocean')}
                    onMouseLeave={() => setHoveredId(null)}
                    className="home-featured_item">
                        <VhsTape id="savetheocean" />
                    </Link>
                    <Link 
                    to={"/projects/catoro"} 
                    onClick={() => {
                        window.scroll(0,0)
                    }}
                    onMouseEnter={() => setHoveredId('catoro')}
                    onMouseLeave={() => setHoveredId(null)}
                    className="home-featured_item">
                        <VhsTape id="catoro" />
                    </Link>

                        {/* </div> */}

                        {/* View more button */}
                        <div className="project-cta col-12-md col-4-sm mb-8">
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
            </section>

        </>
    )

}

export default Home;