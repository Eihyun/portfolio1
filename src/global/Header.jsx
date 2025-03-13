import { Link } from "react-router";
import logo from "../assets/images/logo.png";

import "./Header.css";

function Header() {

    return(
        <>
            <header className="site-header">
                <div className="container mt-6">
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}

export default Header;