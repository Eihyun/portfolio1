import { useEffect, useRef } from 'react';
import hljs from '../../utils/highlight';
import './CodeBlock.css';

export default function CodeBlock({ language = 'plaintext', children, className = '' }) {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) hljs.highlightElement(codeRef.current);
    }, [children, language]);

    return (
        <pre className={`code-block ${className}`}>
        <code ref={codeRef} className={`language-${language}`}>
            {children}
        </code>
        </pre>
    );
}
