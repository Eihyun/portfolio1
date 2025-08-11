import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavDesktop.css';

function NavDesktop() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const logos = [
            "/images/Eihyun_brush.svg",
            "/images/Eihyun_coffee.svg",
            "/images/Eihyun_laptop.svg",
            "/images/Eihyun_mic.svg"
        ];
        logos.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <div className="nav-container">
            <ul className="navbar noka fw-7">
                <NavItem
                    to="/"
                    label="Home"
                    imgSrc="/images/Eihyun_coffee.svg"
                    active={isActive('/')}
                />
                <NavItem
                    to="/about"
                    label="About"
                    imgSrc="/images/Eihyun_mic.svg"
                    active={isActive('/about')}
                />
                <NavItem
                    to="/projects"
                    label="Projects"
                    imgSrc="/images/Eihyun_laptop.svg"
                    active={isActive('/projects')}
                />
                <NavItem
                    to="/crafts"
                    label="Crafts"
                    imgSrc="/images/Eihyun_brush.svg"
                    active={isActive('/crafts')}
                />
            </ul>
        </div>
    );
}

function NavItem({ to, label, imgSrc, active }) {
    return (
        <li className={`nav-item ${active ? 'active' : ''}`}>
            <Link to={to}>
                <span className="nav-text">{label}</span>
                <img
                    src={imgSrc}
                    alt=""
                    aria-hidden="true"
                    className={`nav-logo-icon ${label}-logo`}
                />
            </Link>
        </li>
    );
}

export default NavDesktop;
