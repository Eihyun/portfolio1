import { Link } from "react-router";
import { useState } from 'react';

import './NavDesktop.css';

function NavDesktop() {
    const [active, setActive] = useState(false);
    
    return (
        <div className="nav-container">

                <ul className="navbar noka fw-7">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/logo">Logo</Link></li>
                </ul>

        </div> 
    )
}

export default NavDesktop;