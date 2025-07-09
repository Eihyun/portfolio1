import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from 'react';

import logoMic from '../images/Eihyun_mic.svg';
import logoLaptop from '../images/Eihyun_laptop.svg';
import logoCoffee from '../images/Eihyun_coffee.svg';
import logoBrush from '../images/Eihyun_brush.svg';


import './NavDesktop.css';

function NavDesktop() {
    const location = useLocation();
    const [hovered, setHovered] = useState(null);

    const isActive = (path) => location.pathname === path;

    return (
        <>
        <div className="nav-container">

                <ul className="navbar noka fw-7">
                    <li
                        onMouseEnter={() => setHovered('/')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link to="/">
                            {isActive('/') || hovered === '/' ? (
                                <img
                                src={logoCoffee}
                                alt="Home Logo"
                                className="nav-logo-icon home-logo"
                                />
                            ) : (
                                "Home"
                            )}
                            </Link>
                    </li>
                    <li
                        onMouseEnter={() => setHovered('/about')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link to="/about">
                            {isActive('/about') || hovered === '/about' ? (
                                <img
                                src={logoMic}
                                alt="About Logo"
                                className="nav-logo-icon about-logo"
                                />
                            ) : (
                                "About"
                            )}
                            </Link>
                    </li>
                    <li
                        onMouseEnter={() => setHovered('/projects')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link to="/projects">
                            {isActive('/projects') || hovered === '/projects' ? (
                                <img
                                src={logoLaptop}
                                alt="Projects Logo"
                                className="nav-logo-icon projects-logo"
                                />
                            ) : (
                                "Projects"
                            )}
                            </Link>
                    </li>
                    <li
                        onMouseEnter={() => setHovered('/crafts')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link to="/crafts">
                            {isActive('/crafts') || hovered === '/crafts' ? (
                                <img
                                src={logoBrush}
                                alt="Crafts Logo"
                                className="nav-logo-icon crafts-logo"
                                />
                            ) : (
                                "Crafts"
                            )}
                            </Link>
                    </li>
                </ul>

        </div> 
        </>
    )
}

export default NavDesktop;