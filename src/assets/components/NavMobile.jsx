import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import './NavMobile.css';

function NavMobile() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(prev => !prev);
    };

    const closeMenu = () => {
        setActive(false);
    };

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [active]);

    return (
        <div className={`nav-mobile-container ${active ? 'active' : ''}`}>
            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            <motion.span
            className="hamburger-bar"
            animate={{
                rotate: active ? 45 : 0,
                x: active ? 0 : 0,
                y: active ? 6 : 0,
                backgroundColor: active ? "#fff" : "#000"
            }}
            />
            <motion.span
            className="hamburger-bar"
            animate={{
                opacity: active ? 0 : 1,
                backgroundColor: active ? "#fff" : "#000"
            }}
            />
            <motion.span
            className="hamburger-bar"
            animate={{
                rotate: active ? -45 : 0,
                x: active ? -2 : 0,
                y: active ? -12 : 0,
                backgroundColor: active ? "#fff" : "#000"
            }}
            />

            </button>

            {/* Menu */}
            <AnimatePresence>
                {active && (
                    <motion.ul
                        className="nav-mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <li className="nav-home noka fw-6"><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li className="nav-about"><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li className="nav-projects"><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                        <li className="nav-logo"><Link to="/logo" onClick={closeMenu}>Logo</Link></li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

export default NavMobile;
