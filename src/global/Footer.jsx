import { useState } from 'react';
import "./Footer.css";
import RainbowBar from "../assets/components/RainbowBar";
import Icons from "../assets/components/Icons";

import { RiClipboardLine } from "@remixicon/react";

function Footer() {
    const [copied, setCopied] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText("hello@eihyunkim.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="grid mt-3 mb-3">
                        <div className="site-footer-left col-4-md col-4-sm noka">
                            <a href="mailto:keh7370@gmail.com">
                            hello@eihyunkim.com
                            </a>
                            <div className="email-copy-container">
                                <RiClipboardLine className="email-copy-icon" onClick={copyToClipboard}/>
                                {copied && (
                                    <span className="email-tooltip">
                                        Copied!
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="site-footer-middle col-4-lg col-5-md col-4-sm noka">
                            Built and designed by Eihyun 🍲<br />
                            Slowly, like cooking hot soup. © 2025 
                        </div>
                        <div className="site-footer-right col-4-lg col-3-md col-4-sm">
                            <Icons className="footer-icons"/>
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