import { Link } from "react-router";

import Navigation from '../assets/components/Navigation';
import logo from "../assets/images/logo.png";

import "./Header.css";

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
                        <div className="header-nav col-9-md col-3-sm">
                            <Navigation />
                        </div>
                        
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;