import './Logo.css';
import LogoRough from '../assets/images/Logo_Rough.jpeg';
import LogoSketch1 from '../assets/images/Logo_Sketch1.jpeg';
import LogoSketch2 from '../assets/images/Logo_Sketch2.jpeg';
import LogoBrush from "../assets/images/Eihyun_brush.svg";
import LogoCoffee from "../assets/images/Eihyun_coffee.svg";
import LogoLaptop from "../assets/images/Eihyun_laptop.svg";


function Logo() {

    return(
        <>
            <div className="container">
                <div className="grid logo-page mb-8">
                    <div className="col-12-md col-4-sm mt-8">
                        <h2 className="logo-title noka fw-6 mb-6">Do you know more about how the logos was made?</h2>
                        <p className=" logo-text pretendard mt-6" >
                        To design a logo that represents my personal brand through a combination of typography and a mascot character. The logo should reflect my identity and work as a web developer, with a clean and modern aesthetic that connects to both vintage mascot influences and current design trends.
                        </p>
                    </div>
                    <div className="col-12-md col-4-sm mt-8">
                        <h2 className="logo-title cc-sign-language mb-6">Brainstorming</h2>
                        <img src={LogoRough} alt=""/>
                        <p className=" logo-text pretendard mt-6" >The process began with sketching out ideas for the mascot character. I wanted the character to have a clear connection to me, so I incorporated details like my beanie and headphones, which are part of my go-to style. 
                        </p>
                    </div>

                    <div className="col-12-md col-4-sm mt-8">
                        <h2 className="logo-title cc-sign-language mb-6">Logo Sketch</h2>
                        <p className=" logo-text pretendard mb-6">The character also needed to symbolize my work in web development, so I added a laptop to the design. After finalizing the sketch, I used a tablet to digitize the drawing and then refined it further in Adobe Illustrator. While the character came together fairly easily, the background was a bit trickier. I experimented with several options before deciding on asimple background that wouldn’t detract from the mascot itself.</p>
                        <img src={LogoSketch1} alt="" className="logo-sketch"/>
                        <img src={LogoSketch2} alt="" className="logo-sketch" />
                    </div>


                    <div className="col-12-md col-4-sm mt-8">
                        <h2 className="logo-title cc-sign-language mb-6">Logo Versions</h2>
                        <p className=" logo-text pretendard">The process of creating these variations was simple but fun. After finalizing the main mascot design, I adjusted the hands and positioning in Adobe Illustrator to incorporate the different items. This allowed me to create a set of logos that felt cohesive but could be used in avariety of contexts without losing the core identity of my brand.</p>
                    </div>
                    <div className="logo-ver col-3-lg col-4-md col-2-sm mt-4">
                        <img src={LogoBrush} alt=""/>
                    </div>
                    <div className="logo-ver col-3-lg col-4-md col-2-sm mt-4">
                        <img src={LogoCoffee} alt=""/>
                    </div>
                    <div className="logo-ver col-3-lg col-4-md col-2-sm mt-4">
                        <img src={LogoLaptop} alt=""/>
                    </div>

                    <div className="col-12-md col-4-sm mt-8">
                        <h2 className="logo-title cc-sign-language mb-6">Logo Animation</h2>
                        <p className=" logo-text pretendard">In addition to this, I decided to take it a step further and create an animated intro bumper for Motion Graphics class. I created a parody of the Pixar intro. I used Adobe After Effects to animate it, giving the logo a life of its own.</p>
                    </div>
                    <div className="col-12-md col-4-sm mt-6 logo-animation">
                        <iframe
                            width="560" height="315" 
                            src='https://www.youtube.com/embed/F9Ck_rQpj2U?si=4fHwia2ShEwmzbzz'
                            frameborder='0'
                            allow="accelerometer; autoplay;"
                            allowfullscreen
                            title='Logo animation'
                        />
                    </div>
                    <div className="col-12-md col-4-sm mt-6">
                        <p className=" logo-text pretendard">With all these elements combined, the final result is a logo and branding system that not only represents me but also adapts to different contexts, making it a perfect fit for my portfolio.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Logo;