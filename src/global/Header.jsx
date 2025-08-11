import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import submark from "../assets/images/Eihyun_submark.svg";
import useMediaQuery from "../hooks/useMediaQuery";

import NavDesktop from "../assets/components/NavDesktop";
import NavMobile from "../assets/components/NavMobile";

import "./Header.css";

function Header() {
    const isMobile = useMediaQuery("(max-width: 834px)");

    return (
        <header className="site-header">
            <div className="container">
                <div className="grid vertical-center">
                    <div className="col-3-md col-1-sm">
                        <Link to="/" className="site-header__logo-container">
                            <img src={submark} className="site-header__logo" alt="Logo" />
                        </Link>
                    </div>
                    <div className="header-nav col-9-md col-3-sm">
                        {isMobile ? <NavMobile /> : <NavDesktop />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
