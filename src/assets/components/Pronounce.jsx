import { useState } from "react";
import useSound from 'use-sound';

import './Pronounce.css';
import { RiVolumeUpFill } from '@remixicon/react';
import KorName from './KorName';
import fartSfx from '../audio/fart.mp3';
import EihyunSfx from '../audio/Eihyun.mp3';

const Pronounce = () => {
    const [play] = useSound(EihyunSfx);
    const [tipVisible, setTipVisible] = useState(true);

    const handlePlay = () => {
        play();
        setTipVisible(false);
        setTimeout(() => setTipVisible(true), 1000);
    }

    return (
        <>
        <div className="pronounce mt-8">
            <div className="pronounce-audio">
                <RiVolumeUpFill
                    size={80} 
                    color="var(--primary)" 
                    className="pronounce-icon" 
                    onClick={handlePlay}
                />
                {tipVisible && (
                    <span className="pronounce-tip pretendard">Click to hear it!</span>
                )}
                <audio src="../audio/fart.mp3" />
                    <h3 className="loos-wide fw-7 pl-5 pronounce-name">Eihyun</h3>
            </div>

            <div className="phonetics">
                <div className="loos-wide">/ee-hjə•n/</div>
            </div>

            <div className="name-breakdown">
                <KorName />
            </div>
        </div>
        </>
    )
}

export default Pronounce;