import { Link } from "react-router";
import { useState } from 'react';
import { motion, MotionConfig } from "framer-motion";

import logo from "../assets/images/logo.png";

import "./Header.css";

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
        >
            <motion.button 
                initial={false}
                onClick={() => setActive((pv) => !pv)}
                className="hamburger"
                animate={active ? "open" : "closed"}
            >
                <motion.span 
                    className="hamburger-bar"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            top: ["35%", "50%", "50%"],
                            backgroundColor: ["black", "black", "white"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            top: ["50%", "50%", "35%"],
                            backgroundColor: ["white", "white", "black"],
                        }
                    }}
                />
                <motion.span 
                    className="hamburger-bar"
                    variants={{
                        open: {
                            width: ["2.8rem", "2rem", "2rem"],
                            left: ["10%", "20%", "20%"],
                            rotate: ["0deg", "0deg", "45deg"],
                            backgroundColor: ["black", "black", "white"],
                        },
                        closed: {
                            width: ["2rem", "2rem", "2.8rem"],
                            left: ["20%", "20%", "10%"],
                            rotate: ["-45deg", "0deg", "0deg"],
                            backgroundColor: ["white", "white", "black"],
                        }
                    }}
                />
                <motion.span 
                    className="hamburger-bar"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                            top: ["65%", "50%", "50%"],
                            backgroundColor: ["black", "black", "white"],
                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                            top: ["50%", "50%", "65%"],
                            backgroundColor: ["white", "white", "black"],
                        }
                    }}
                />
            <motion.span 
                className="hamburger-bg"
                variants={{
                    open: {
                        backgroundColor: "#303030",
                        scale: "100%",
                        display: "block",
                        visibility: "visible",
                        opacity: "100",
                    },
                    closed: {
                        backgroundColor: "transparent",
                        scale: "0%",
                        translateX: "-68%",
                        translateY: "-7%",
                        display: "none",
                        visibility: "hidden",
                        opacity: "0",
                    }
                }}
            >
                <ul className="hamburger-navbar noka fw-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/logo">Logo</Link></li>
                </ul>
            </motion.span>
            </motion.button>
        </MotionConfig>
    );
};

function Header() {

    return(
        <>
            <header className="site-header">

                <div className="container">
                    <div className="grid vertical-center">
                        <div className="col-3-md col-1-sm">
                            <Link to="/">
                                <img src={logo} className="site-header__logo" />
                            </Link>
                        </div>
                        <div className="col-9-md col-3-sm">
                            <ul className="navbar">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/logo">Logo</Link></li>
                            </ul>
                            <div className="hamburger-container">
                                <AnimatedHamburgerButton />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </header>
        </>
    );

}

export default Header;