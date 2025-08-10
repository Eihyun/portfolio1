import LogoRough1 from '../../assets/images/logo-rough1.png';
import LogoRough2 from '../../assets/images/logo-rough2.png';
import LogoRough3 from '../../assets/images/logo-rough3.png';
import LogoRough4 from '../../assets/images/logo-rough4.png';
import LogoRough5 from '../../assets/images/logo-rough5.png';
import LogoRough6 from '../../assets/images/logo-rough6.png';
import LogoRough7 from '../../assets/images/logo-rough7.png';
import LogoRough8 from '../../assets/images/logo-rough8.png';
import LogoRough9 from '../../assets/images/logo-rough9.png';
import LogoRough10 from '../../assets/images/logo-rough10.png';
import LogoSketch1 from '../../assets/images/Logo_Sketch1.jpeg';
import LogoSketch2 from '../../assets/images/Logo_Sketch2.jpeg';
import LogoExp1 from '../../assets/images/logo-exploration1.png';
import LogoExp2 from '../../assets/images/logo-exploration2.png';
import LogoFinal1 from '../../assets/images/logo-final.png';
import LogoFinal2 from '../../assets/images/logo-submark.png';
import LogoBrush from "../../assets/images/Eihyun_brush.svg";
import LogoCoffee from "../../assets/images/Eihyun_coffee.svg";
import LogoLaptop from "../../assets/images/Eihyun_laptop.svg";
import LogoMic from "../../assets/images/Eihyun_mic.svg";

import './TabContent.css'

function Logo() {
    return (
        <>
            {/* Goal */}
            <div className="col-12-md col-4-sm">
                <h1 className="logo-title noka fw-6 mb-6">Behind the Logo</h1>
                <p className=" logo-text pretendard mt-6" >
                The goal was to design a logo that represents my personal brand through a combination of typography and a mascot character. The logo should reflect my identity and work as a web developer, with a clean and modern aesthetic that connects to both vintage mascot influences and current design trends.
                </p>
            </div>

            {/* Brainstorming */}
            <div className="col-12-md col-4-sm mt-8">
                <h2 className="logo-subtitle pretendard fw-6 mb-6">Brainstorming</h2>
                <p className=" logo-text pretendard mt-6" >The process began with sketching out ideas. Initially, I explored the idea of using typography, as well as the possibility of creating a mascot character. To refine my vision, I searched logos featuring mascot characters for inspo.
                </p>
                <div className='logo-rough mt-6'>
                    <img src={LogoRough1} alt="Rough draft of the logo 1"/>
                    <img src={LogoRough2} alt="Rough draft of the logo 2"/>
                    <img src={LogoRough3} alt="Rough draft of the logo 3"/>
                    <img src={LogoRough4} alt="Rough draft of the logo 4"/>
                    <img src={LogoRough8} alt="Rough draft of the logo 5"/>
                    <img src={LogoRough9} alt="Rough draft of the logo 6"/>
                    <img src={LogoRough5} alt="Rough draft of the logo 7"/>
                    <img src={LogoRough6} alt="Rough draft of the logo 8"/>
                    <img src={LogoRough7} alt="Rough draft of the logo 9"/>
                    <img src={LogoRough10} alt="Rough draft of the logo 10"/>
                </div>
                <p className=" logo-text pretendard mt-6" >I then sketched the character to capture my appearance. I wanted the character to have a clear connection to me, so I incorporated details like my beanie and headphones, which are part of my go-to style. 
                </p>
            </div>

            {/* Sketch */}
            <div className="col-12-md col-4-sm mt-8">
                <h2 className="logo-subtitle pretendard fw-6 mb-6">Logo Sketch</h2>
                <p className=" logo-text pretendard mb-6">The character also needed to symbolize my work in web development, so I added a laptop to the design. </p>
                <img src={LogoSketch1} alt="Sketch of the logo 1" className="logo-sketch"/>
                <img src={LogoSketch2} alt="Sketch of the logo 2" className="logo-sketch" />
                <p className=" logo-text pretendard mb-6">After finalizing the sketch, I used a tablet to create a rough draft and then refined it further in Adobe Illustrator.</p>
                <img src={LogoExp1} alt="Exploration with the logo 1" className="logo-exp"/>
                <img src={LogoExp2} alt="Exploration with the logo 2" className="logo-exp" />
                <p className=" logo-text pretendard mt-6 mb-6">While the character came together fairly easily, the background was a bit trickier. I experimented with several options, but then I decided to go with a simple background that wouldn’t detract from the mascot itself.</p>
                <img src={LogoFinal1} alt="Exploration with the logo 1" className="logo-exp"/>
                <img src={LogoFinal2} alt="Exploration with the logo 2" className="logo-exp" />
            </div>

            {/* Versions */}
            <div className="col-12-md col-4-sm mt-8">
                <h2 className="logo-subtitle pretendard fw-6 mb-6">Logo Versions</h2>
                <p className=" logo-text pretendard">The process of creating these variations was simple but fun. After finalizing the main mascot design, I adjusted the hands and tools in Adobe Illustrator to incorporate different items. This allowed me to create a set of logos that felt cohesive but could be used in a variety of contexts without losing the core identity of my brand.</p>
            </div>
            <div className="logo-ver col-3-lg col-3-md col-1-sm mt-4">
                <img src={LogoLaptop} alt=""/>
            </div>
            <div className="logo-ver col-3-lg col-3-md col-1-sm mt-4">
                <img src={LogoCoffee} alt=""/>
            </div>
            <div className="logo-ver col-3-lg col-3-md col-1-sm mt-4">
                <img src={LogoBrush} alt=""/>
            </div>
            <div className="logo-ver col-3-lg col-3-md col-1-sm mt-4">
                <img src={LogoMic} alt=""/>
            </div>

            {/* Animation */}
            <div className="col-12-md col-4-sm mt-8">
                <h2 className="logo-subtitle pretendard fw-6 mb-6">Logo Animation</h2>
                <p className=" logo-text pretendard">With all these elements combined, the final result is a logo and branding system that not only represents me but also adapts to different contexts, making it a perfect fit for my portfolio.</p>
            </div>
            <div className="col-12-md col-4-sm mt-6">
                <p className="logo-text pretendard">In addition to this, I decided to take it a step further and create an animated intro bumper for Motion Graphics class. I created a parody of the Pixar intro. I used Adobe After Effects to animate it, giving the logo a life of its own. 
                </p>
                <p className="logo-text pretendard fw-6 mt-7">
                <em>Go to 'Video' tab on the top of this page to watch! 👀</em></p>
            </div>
        </>
    )
};

export default Logo;