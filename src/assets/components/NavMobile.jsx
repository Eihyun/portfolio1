import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import './NavMobile.css';

function NavMobile() {
    const [active, setActive] = useState(false);
    const [rotateCrafts, setRotateCrafts] = useState(false);

    const toggleMenu = () => {
        setActive(prev => {
            const newState = !prev;
            if (newState) {
                setTimeout(() => setRotateCrafts(true), 1000);
            } else {
                setRotateCrafts(false); // Reset when closed
            }
            return newState;
        });
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
                        transition={{ duration: 0.4 }}
                    >
                        <li className="noka fw-6">
                            <Link className='nav-home' to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="loos-condensed fw-7">
                            <Link className='nav-about' to="/about" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="noka fw-5">
                            <Link className='nav-projects' to="/projects" onClick={closeMenu}>Projects</Link>
                        </li>
                        <motion.li
                            className="loos-extended fw-8"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: active ? -3 : 0 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut"}}
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            <Link className='nav-crafts' to="/logo" onClick={closeMenu}>Crafts</Link>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

export default NavMobile;
