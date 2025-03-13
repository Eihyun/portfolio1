import "./Footer.css";
import RainbowBar from "../assets/components/RainbowBar";

function Footer() {

    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="grid mb-3">
                        <div className="col-8-md col-2-sm">
                            <a href="mailto:keh7370@gmail.com">Email Eihyun</a>
                        </div>
                        <div className="col-4-md col-4-sm">
                            © Created by Eihyun Kim, 2025
                        </div>
                    </div>
                </div>
                    <div className="site-footer_rainbow">
                        <RainbowBar />
                    </div>
            </footer>
        </>
    );

}

export default Footer;