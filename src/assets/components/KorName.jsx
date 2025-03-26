import React, { useState } from 'react';
import './KorName.css';

function KorName() {
    return (
        <>
        <div className="kor-container">
            <div className="jjGgwak kor-name">
                <span className="kor-letter">ㅇ
                </span>
                <span className="kor-letter">ㅣ</span>
                <span className="kor-letter">ㅎ</span>
                <span className="kor-letter">ㅕ</span>
                <span className="kor-letter">ㄴ</span>
                <span className="kor-word">이현</span>
            </div>
            <div className="loos-normal breakdown">
                <span className="kor-bd">No sound<br/>&#40;consonant&#41;</span>
                <span className="kor-bd">ee<br/>&#40;vowel&#41;</span>
                <span className="kor-bd">h<br/>&#40;consonant&#41;</span>
                <span className="kor-bd">yuh/yeoh<br/>&#40;vowel&#41;</span>
                <span className="kor-bd">n<br/>&#40;final consonant&#41;</span>
            </div>
        </div>
        </>
    )
}

export default KorName;