import homeBanner from "../assets/images/home-banner.jpg";

import Header from "../global/Header"
import Footer from "../global/Footer";

import "./Home.css";

function Home() {

    return(
        <>
            <div className="container" id="SUPER_COOL_HOME_PAGE">
                <div className="grid vertical-center ">
                    <div className="col-12 col-6-lg">
                        <h1 className="h2">Be Kind, Say Hi</h1>
                    </div>
                    <div className="col-12 col-4-lg">
                        <img src={homeBanner} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;