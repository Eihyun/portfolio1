import React, {useState} from 'react';

import {  RiLinkedinBoxLine, RiLinkedinBoxFill, RiInstagramLine, RiInstagramFill, RiGithubLine, RiGithubFill } from '@remixicon/react'

function Icons() {
    const [hoveredIcon, setHoveredIcon] = useState(false);

    return(
        <>
            <div className="home-banner_icons">
                <a href="https://www.linkedin.com/in/eihyun-kim-1530731a6/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('linkedin')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'linkedin' ? (
                        <RiLinkedinBoxFill
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiLinkedinBoxLine
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )
                }
                </a>
                <a href="https://www.instagram.com/eihyunkim/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('instagram')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'instagram' ? (
                        <RiInstagramFill
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiInstagramLine
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )
                }
                </a>
                <a href="https://www.github.com/Eihyun/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon('github')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    {hoveredIcon === 'github' ? (
                        <RiGithubFill
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    ) : (
                        <RiGithubLine
                            size={40} 
                            color="var(--primary)" 
                            className="banner-icon" 
                        />
                    )
                }
                </a>
            </div>
        </>
    )
}

export default Icons;