import { Link } from 'react-router-dom';

// Components
import CodeBlock from '../../assets/components/CodeBlock';

// CSS
import "./ProjectDetail2.css";

// Media
import SimpleClinicOG from '../../assets/video/SimpleClinic_OG.mp4';
import NavDesktop from '../../assets/images/NavDesktop.gif';
import NavTablet from '../../assets/images/NavTablet.gif';
import DesignComparison from '../../assets/images/DesignComparison.gif';
import LayoutComparison from '../../assets/images/LayoutComparison.png';
import FormDemo from '../../assets/images/FormDemo.gif';

function SimpleClinic() {

    return(
        <section className="grid project-detail">
            <div className="col-12-md col-4-sm">
                <h1 className="case-title noka fw-6">Case Study: Simple Clinic</h1>
            </div>
            <div className="col-12-md col-4-sm case-body-container pretendard">
                {/* Visit link */}
                <div className="case-body">
                    <div className="case-text case-visit">
                        <p>
                            <em>Visit the website to view:
                                <a href="https://simpleclinic.eihyunkim.com" target="_blank" className="case-link">Simple Clinic</a>
                            </em>
                        </p>
                    </div>
                </div>
                {/* Table */}
                <div className="case-body">
                    <div className="case-text case-table ">
                        <h2 className="case-subtitle fw-6">Table of Content</h2>
                        <ul>
                            <li>
                                <a href="#overview"  className="case-link">Project Overview
                                </a>
                            </li>
                            <li>
                                <a href="#goals"  className="case-link">Development Goals
                                </a>
                            </li>
                            <li>
                                <a href="#nav-system"  className="case-link">Navigation System
                                </a>
                            </li>
                            <li>
                                <a href="#design"  className="case-link">Design System
                                </a>
                            </li>
                            <li>
                                <a href="#form-handling"  className="case-link">Form Handling
                                </a>
                            </li>
                            <li>
                                <a href="#reflection"  className="case-link">Reflection & Next Step
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Project Overview */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="overview">Project Overview</h2>
                        <p>This project began when the designer I collaborated with, Sally, who is also my classmate, was approached by a friend who owns Simple Clinic, a health and wellness business. The client needed a redesigned website to present their services more clearly, improve navigation, and make booking or contacting the clinic straightforward for users.</p>
                        
                        <p>It was my first tiem working on a real-world project outside of school, which meant I needed to be deliberate with the project setup and architecture. I treated the initial phase as critical to ensuring the site could be developed efficiently and maintained easily in the future.</p>
                    </div>
                    <figure className='case-video'>
                        <video src={SimpleClinicOG} preload='metadata' autoPlay loop muted playsInline></video>
                        <figcaption className="footnote">How original website looked like</figcaption>
                    </figure>
                    <div className="case-text">
                        <p>Sally handled the visual design, creating finalized <a href="https://www.figma.com/design/S1fq7p2EeYYKyxpNvPYcgq/Final_-Simple-Clinic?node-id=0-1&t=JdteIlN8TU3MsrUy-1" className='case-link'>Figma</a> layouts based on the brand and user experience. My role was to translate those design into a fully functional, responsive React application. This included:</p>
                        <ul>
                            <li>Setting up the dev environment and project structure.</li>
                            <li>Building pages and components to match the design specifications.</li>
                            <li>Ensuring the site was responsive across devices and met accessibility requirements.</li>
                            <li>Implementing navigation for desktop, tablet, and mobile, with a dropdown for services.</li>
                            <li>Integrating a contact form for backend handling, alongside client-side validation.</li>
                            <li>Optimizing for performances through efficient asset loading and layout stability.</li>
                        </ul>
                    </div>
                </div>
                {/* Goals */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="goals">Development Goals</h2>
                        <p>From the start, my priamry responsibility was to implement the designs in a way that was both visually accurate and technically sound. The development goal included performance, accessibility, and maintainability requirements taht would ensure the site could serve users efficiently over time.</p>
                        <ol>
                            <li>Configure a React environment suitable for production deployment.</li>
                            <li>Organized the folder structure for scalability, separating components, assets, and styles.
                            <CodeBlock language='plaintext' >
                                {`src/
├── assets/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── NavMobile.jsx
│   │   ├── Map.jsx
│   │   └── Form.jsx
│   │   └── PrimaryBtn.jsx
│   │   └── Testimonial.jsx
│   ├── images/
│   └── styles/
│       ├── Header.css
│       ├── Navigation.css
│       └── NavMobile.css
├── global/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── hooks/
│   └── useMediaQuery.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Services.jsx
├── App.jsx
└── main.jsx`}
                            </CodeBlock>
                            </li>
                            <li>Use reusable, modular components to make updates efficient.</li>
                            <li>Maintain accessibility through semantic markup.</li>
                            <li>Apply CSS media queries for conditional rendering, test and refine layouts for desktop, tablet, and mobile devices.</li>
                            <li>Minimize layout shifts and avoid unnecessary re-renders.</li>
                            <li>Ensure smooth transitions and animations without performance drops.</li>
                        </ol>
                    </div>
                </div>
                {/* Navigation System */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="nav-system">Navigation System</h2>
                        <p>I implemented desktop and mobile navigation as separate components but kept the behavior consistent: dropdowns close on route change, mobile locks scroll without layout shift, and icons reflect state.</p>
                        <figure className="case-image">
                            <img src={NavDesktop}></img>
                            <figcaption className="footnote">Desktop Navigation Design</figcaption>
                        </figure>
                        <p>On desktop, the services dropdown originally stayed open after navigation. I tied open state to the current route and closed it whenever the location changed. The key was listening to <code>useLocation()</code> and resetting local state.</p>
                        <CodeBlock language='jsx' className="snippet">{`useEffect(() => setIsOpen(false), [location])`}</CodeBlock>
                        <p>For mobile, I built a full-screen overlay menu with a hamburger that toggles to a close icon. The menu initially caused a subtle page shift when opened because removing the scrollbar changes the viewport width. I measured the scrollbar width at runtime and applied equal right padding only while the menu was open.</p>
                        <figure className="case-image">
                            <img src={NavTablet} alt="" />
                            <figcaption className="footnote">Tablet / Mobile Navigation Design</figcaption>
                        </figure>
                        <CodeBlock language='jsx' className="snippet">
{`useEffect(() => {
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    if (active) {
        document.body.style.overflow = 'hidden';
        if (sbw > 0) {
            document.body.style.paddingRight = \`\${sbw}px\`;
        }
    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
}, [active]);`}
                        </CodeBlock>
                        <p>This removed the layout jump and kept the page stable.</p>
                        <p>I also made the dropdown caret communicate state without extra renders. Instead of conditionally mounting new elements, I toggled a class on the existing icon and let CSS handle the rotation:e layout jump and kept the page stable.</p>
                        <CodeBlock language='jsx' className="snippet">{`<img className={\`dropdown-icon \`\${isOpen ? 'rotate' : ''}\`} … />
`}</CodeBlock>
                        <p>CSS handled the animation with a single transition. This avoided JS timers and kept interactions smooth.</p>
                    </div>
                </div>
                {/* Design System */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="design">Design System</h2>
                        <p>I planned the layout around three breakpoints that match the project needs: desktop at 1440 and above, tablet at 834, and mobile at 320. The goal was a consistent structure that does not reflow unexpectedly when components switch between desktop and mobile variants.</p>
                        <p>I used mobile‑first CSS for layout and spacing, then layered media queries for tablet and desktop. I kept the DOM stable and used CSS to control visibility where possible. When logic had to change per viewport, I used media queries in CSS.</p>
                        <CodeBlock language='css' className="snippet">{`.container {
    margin: 0 auto;
    min-width: 20rem;
    width: 70vw;
}

/* Tablet grid*/
@media (min-width: 834px) {
    .container {
        min-width: 48.125rem;
    }

/* Desktop grid */
@media screen and (min-width: 1440px) {
    .container {
        min-width: 80rem;
    }
}`}</CodeBlock>
                        <p>I set up a global <code>main.css</code> to hold all the core design tokens, so I could treat class names almost like small building-block components. This kept styles consistent across the site and made it easier to assemble layouts without rewriting the same CSS.</p>
                        <p>When it came time to match the layout to the wireframes, I used the <a href="https://www.welldonecode.com/perfectpixel/" target="_blank" className="case-link">PerfectPixel</a> Chrome plugin to overlay the design on top of the live site. That said, I learned the hard way that chasing true “pixel perfection” is a trap.</p>
                        <figure className="case-image">
                            <img src={LayoutComparison} alt="" />
                            <figcaption className="footnote">Left: wireframe. Right: live website.</figcaption>
                        </figure>
                        <p>At the start, I spent too much time trying to get every single element to align perfectly with the overlay. Eventually I realized it was slowing down the project and doing more harm than good, especially to my own mental health (no, for real 🫠). </p>
                        <p>I learned a couple of pixels off here and there is fine if the overall visual balance is correct and the site is functional, responsive, and accessible. Now I focus on getting the key alignments right and keeping the experience solid, rather than obsessing over minor differences that nobody but me (and maybe PerfectPixel) would ever notice.</p>
                        <figure className="case-image">
                            <img src={DesignComparison} alt="" />
                            <figcaption className="footnote">Pixel-almost-perfect...</figcaption>
                        </figure>
                    </div>
                </div>
                {/* Form Handling */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="form-handling">Form Handling</h2>
                        <p>I used <a href="https://react-hook-form.com/" target='_blank' className="case-link">React Hook Form + Yup</a> for client‑side validation, then a native POST to <a href="https://formsubmit.co/" target='_blank' className="case-link">FormSubmit</a> only after the form passes validation.</p>
                        <p>I started by centralizing all rules in the Yup schema to avoid double‑validating the same field in both <code>register</code> and the <code>resolver</code>. That removed noisy edge cases and made error messages consistent.</p>
                        <CodeBlock language='jsx' className="snippet">{`// schema + RHF setup
const schema = yup.object({
    Name: yup.string().required("Name is required"),
    Email: yup.string().email("Invalid email").required("Email is required"),
    Message: yup.string().required("Message is required"),
});

const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
} = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit"
})`}</CodeBlock>
                        <p>To preserve FormSubmit’s backend handling and redirect flow, I used a <code>formRef</code> and triggered a native submit only when validation succeeds. This keeps the UX fast and avoids building a server just for email.</p>
                        <CodeBlock language='jsx' className='snippet'>{`// submit flow: validate first, then native POST to FormSubmit
const formRef = useRef(null);
const onValid = () => formRef.current?.submit();

<form ref={formRef} action="https://formsubmit.co/your@email.com" method="POST" noValidate>
    {/* fields… */}
    <button type="button" onClick={handleSubmit(onValid)}>Send</button>
</form>`}</CodeBlock>
                        <p>For layout, I aligned labels and error messages on one line so users see feedback immediately, with the input on the next line. It’s just a tiny flex row, but it keeps the form readable on both mobile and desktop.</p>
                        <CodeBlock language='jsx' className='snippet'>{`<div className="label-row">
    <label htmlFor="Email">Email</label>
    <span className="error">{errors.Email?.message}</span>
</div>
<input id="Email" type="email" {...register("Email")} />`}</CodeBlock>
                        <figure className="case-image">
                            <img src={FormDemo} alt="" />
                            <figcaption className="footnote">Form demonstration</figcaption>
                        </figure>
                        <p>This structure gives me clear validation, a clean submission path, and a stable layout that scales across breakpoints.</p>
                    </div>
                </div>
                {/* Reflection */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="reflection">Reflection</h2>
                        <p>One of the biggest takeaways from this project is that communication is an ongoing part of the work when working with a designer or a team. I focused on the dev side and tried not to overstep into design decisions, but I still had a ton of questions as I went. The more I asked, the smoother the build went.</p>
                        <p>I also learned that “pixel perfect” isn’t a realistic goal, and that's okay. What is realistic is writing better code while meeting the design requirements, so the designer is happy, the client is happy, and I can still sleep at night. 😴</p>
                        <p>Looking ahead, Sally and I plan to deploy the site on the client’s actual domain and continue maintaining it. I’ll keep adding new challenges and solutions here on this project’s detail page in my portfolio. I’m especially looking forward to learning more about the deployment process and what it takes to keep a live site running smoothly over time.</p>
                    </div>
                </div>
                {/* Additional link */}
                <div className="case-body">
                    <div className="case-text case-visit">
                        <p>
                            <em>GitHub Repository:
                                <a href="https://github.com/Eihyun/Simple_Clinic_2025" target="_blank" className="case-link">Simple_Clinic_2025</a>
                            </em>
                        </p>
                        <p>
                            <em>And if you're curious about the wireframes:
                                <a href="https://www.figma.com/design/S1fq7p2EeYYKyxpNvPYcgq/Final_-Simple-Clinic?node-id=0-1&t=POnbFiQDNCgYqCJz-1" target="_blank" className="case-link">Figma</a>
                            </em>
                        </p>
                    </div>
                </div>
                {/* Bottom Nav */}
                <nav className='projects-nav'>
                    <div className="previous">
                    </div>
                    <div className="back">
                        <Link to="/projects">All Project</Link>
                    </div>
                    <div className="next">
                        <Link to="/projects/savetheocean">Next ➡️</Link>
                    </div>
                </nav>

            </div>
        </section>

    )

}

export default SimpleClinic;