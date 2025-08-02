import React, { useState } from 'react';

import { 
    RiLinkedinBoxLine, 
    RiLinkedinBoxFill, 
    RiInstagramLine, 
    RiInstagramFill, 
    RiGithubLine, 
    RiGithubFill 
} from '@remixicon/react'

function Icons({ className = "" }) {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return(
        <>
            <div className={`${className}`}>
                <a href="https://www.linkedin.com/in/eihyun-kim-1530731a6/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('linkedin')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'linkedin' ? (
                        <RiLinkedinBoxFill
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiLinkedinBoxLine
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )}
                </a>
                <a href="https://www.instagram.com/eihyunkim/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('instagram')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'instagram' ? (
                        <RiInstagramFill
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiInstagramLine
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )}
                </a>
                <a href="https://github.com/Eihyun/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('github')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'github' ? (
                        <RiGithubFill
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiGithubLine
                            size={50} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )}
                </a>
            </div>
        </>
    )
}

export default Icons;