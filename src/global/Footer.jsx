import "./Footer.css";
import RainbowBar from "../assets/components/RainbowBar";


function Footer() {

    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="grid mt-3 mb-3">
                        <div className="col-8-md col-2-sm noka">
                            <a href="mailto:keh7370@gmail.com">
                            Email Eihyun: keh7370@gmail.com
                            </a>
                        </div>
                        <div className="col-4-md col-4-sm noka">
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