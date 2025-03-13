import "./Home.css";

import Header from "../global/Header"
import Footer from "../global/Footer";
import RainbowBar from "../assets/components/RainbowBar";
import Icons from "../assets/components/Icons";

function Home() {

    return(
        <>
            <div className="container">
                <div className="grid vertical-center home-banner">
                    <div className="col-8-lg">
                        <div className="home-banner_text">

                            <h2 className="h2 loos-extended home-banner_beKind">Be Kind, <span className="loos-wide home-banner_sayHi">Say Hi</span></h2>

                            <div className="home-banner_rainbow">
                                <RainbowBar />
                            </div>
                        </div>
                    </div>
                    <div className="col-11-lg">
                        
                    </div>
                    <div className="col-1-lg">
                        <Icons />
                    </div>
                </div>
            </div>


        </>
    )

}

export default Home;