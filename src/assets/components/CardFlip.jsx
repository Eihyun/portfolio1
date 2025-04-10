import { useState } from 'react';
import { motion } from 'framer-motion';

import './CardFlip.css';

const CardFlip = ({ project, imageMap }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleMouseEnter() {
        if (!isAnimating && !isFlipped) {
            setIsFlipped(true);
            setIsAnimating(true);
        }
    }

    function handleMouseLeave() {
        if (!isAnimating && isFlipped) {
            setIsFlipped(false);
            setIsAnimating(true);
        }
    }

    return (
        <div 
        className="flip-card" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <motion.div
            className="flip-card-inner"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${imageMap[project.frontImage]})` }}
                    >

                </div>

                <div
                    className="flip-card-back"
                    style={{ backgroundImage: `url(${imageMap[project.backImage]})` }}
                />
            </motion.div>
            <h2 className="noka fw-6">{project.name}</h2>
        </div>
    );
        };


export default CardFlip;