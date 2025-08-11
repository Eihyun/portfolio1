import { useEffect, useRef, useState } from 'react';

import './SideBar.css';

function SideBar ({ items  }) {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0);            // px
    const startX = useRef(0);
    const startW = useRef(0);
    const dragging = useRef(false);
    const MIN = 0;                                    // closed
    const MAX = 320;                                  // fully open
    const SNAP = 180;                                 // snap threshold
    const navRef = useRef(null);

     // Auto‑open when landing on #overview
    useEffect(() => {
        if (location.hash === "#overview") {
        setIsOpen(true);
        setWidth(MAX);
        }
    }, []);

    // Close on Esc for accessibility
    useEffect(() => {
        const onKey = e => {
        if (e.key === "Escape" && isOpen) {
            setIsOpen(false);
            setWidth(MIN);
        }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    // Keep width in sync with isOpen
    useEffect(() => {
        setWidth(isOpen ? MAX : MIN);
    }, [isOpen]);

    // Drag handlers
    const onPointerDown = e => {
        dragging.current = true;
        startX.current = e.clientX;
        startW.current = width;
        // capture pointer for smooth drag
        e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = e => {
        if (!dragging.current) return;
        const delta = startX.current - e.clientX; // dragging left opens
        let next = Math.min(MAX, Math.max(MIN, startW.current + delta));
        setWidth(next);
    };

    const onPointerUp = () => {
        if (!dragging.current) return;
        dragging.current = false;
        // snap open or closed
        if (width >= SNAP) {
        setIsOpen(true);
        setWidth(MAX);
        } else {
        setIsOpen(false);
        setWidth(MIN);
        }
    };

    // Highlight active hash
    const active = typeof window !== "undefined" ? window.location.hash : "";

    return (
        <aside
        ref={navRef}
        aria-label="Table of contents"
        style={{
            width: `${width}px`,
            transition: dragging.current ? "none" : "width 160ms ease",
            boxShadow: width > 0 ? "0 0 24px rgba(0,0,0,0.25)" : "none",
            zIndex: 50,
            display: "flex",
            flexDirection: "row"
            }}
            role="complementary"
        >
            {/* Handle */}
            <button
            aria-label={isOpen ? "Close table of contents" : "Open table of contents"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(v => !v)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            style={{
                width: "36px",
                minWidth: "36px",
                cursor: "ew-resize",
                background: "transparent",
                border: "none",
                borderLeft: "1px solid rgba(255,255,255,0.12)",
                outlineOffset: "2px",
                display: "grid",
                placeItems: "center"
            }}
            >
            {/* vertical hamburger */}
            <div style={{ display: "grid", gap: "6px", transform: "rotate(90deg)" }}>
                <span style={{ width: "18px", height: "2px", background: "white", opacity: 0.8 }} />
                <span style={{ width: "18px", height: "2px", background: "white", opacity: 0.8 }} />
                <span style={{ width: "18px", height: "2px", background: "white", opacity: 0.8 }} />
            </div>
            </button>
    
            {/* Nav content */}
            <nav
            role="navigation"
            style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 16px 24px",
                color: "white"
            }}
            >
            <h3 style={{ fontSize: "14px", letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.8, marginBottom: "8px" }}>
                Table of Contents
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
                {items.map(({ href, label }) => (
                <li key={href}>
                    <a
                    className="case-link"
                    href={href}
                    style={{
                        display: "block",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        color: active === href ? "#FCE205" : "white",
                        background: active === href ? "rgba(252,226,5,0.1)" : "transparent"
                    }}
                    onClick={() => {
                        // keep nav open but you can close here if you prefer
                    }}
                    >
                    {label}
                    </a>
                </li>
                ))}
            </ul>
            </nav>
        </aside>
    );
};

export default SideBar;