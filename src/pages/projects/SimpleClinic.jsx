import { Link } from 'react-router-dom';

// Components
import CodeBlock from '../../assets/components/CodeBlock';

// CSS
import "./ProjectDetail2.css";

// Media
import SimpleClinicOG from '../../assets/video/SimpleClinic_OG.mp4';

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
                                <a href="https://simpleclinic.eihyunkim.com" target="_blank" className="case-link">Simple Clinic</a>.
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
                                <a href="#responsive"  className="case-link">Responsive Design Implementation
                                </a>
                            </li>
                            <li>
                                <a href="#form-handling"  className="case-link">Form Handling
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
                        <p>Sally handled the visual design, creating finalized<a href="https://www.figma.com/design/S1fq7p2EeYYKyxpNvPYcgq/Final_-Simple-Clinic?node-id=0-1&t=JdteIlN8TU3MsrUy-1" className='case-link'>Figma</a> layouts based on the brand and user experience. My role was to translate those design into a fully functional, responsive React application. This included:</p>
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
                            <CodeBlock language='plaintext'>
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
│   │   ├── Logo_v1.png
│   │   ├── ham-menu.svg
│   │   └── close.svg
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
                    </div>
                </div>
                {/* Responsive Design Implementation */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="responsive">Responsive Design Implementation</h2>
                    </div>
                </div>
                {/* Form Handling */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="form-handling">Form Handling</h2>
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