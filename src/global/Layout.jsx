import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

import "../main.css";

function PageWrap() {

    return (
        <>
            <meta name="author" content="Eihyun Kim" />
            <meta name="description" content="Eihyun Kim is a front end web developer based in Vancouver, specialized in user centered websites, focusing on smooth user experience." />
            <meta name="keywords" content="Eihyun Kim, Front-End Developer, Web Designer, UX/UI Design, Web Development, React, BCIT, Portfolio" />
            <script type="application/ld+json" >
                {JSON.stringify(
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Eihyun Kim - Web Dev Portfolio",
                        "url": "https://eihyunkim.com",
                        "description": "Portfolio of Eihyun Kim, a front-end developer based in Vancouver, specialized in user-centered design and development."
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Eihyun Kim",
                        "url": "https://eihyunkim.com",
                        "image": "https://eihyunkim.com/images/profile.jpg",
                        "jobTitle": "Front-End Developer",
                        "worksFor": {
                        "@type": "CollegeOrUniversity",
                        "name": "BCIT"
                        },
                        "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "Canada"
                        },
                        "sameAs": [
                        "https://www.linkedin.com/in/eihyun-kim/",
                        "https://github.com/eihyunkim"
                        ]
                    }
                )}
                </script>
            <Header />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );

}

export default PageWrap;