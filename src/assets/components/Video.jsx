import React from 'react';
import VideoJS from './VideoJS';

import './TabContent.css';

import mythBustersVideo from '../video/MythBusters.mp4';
import extraLVideo from '../video/ExtraL.mp4';

function Video() {
    const videos = [
        {
            title: 'MythBusters',
            src: mythBustersVideo
        },
        {
            title: 'ExtraL',
            src: extraLVideo
        },
    ];

    return (
        <div className="video-gallery col-12-md col-4-sm">
            {videos.map((video, index) => (
            <div key={index} className="video-item">
                <h3 className="pretendard">{video.title}</h3>
                <VideoJS
                options={{
                    autoplay: false,
                    controls: true,
                    responsive: true,
                    fluid: true,
                    sources: [{ src: video.src, type: 'video/mp4' }],
                    poster: `src/assets/images/Preview_${video.title}.png`
                }}
                onReady={(player) => {
                    // Optional event hooks
                    player.on('waiting', () => console.log(`${video.title} is buffering`));
                    player.on('dispose', () => console.log(`${video.title} player disposed`));
                }}
                className="video-player"
                />
            </div>
            ))}
        </div>
        );
    }

export default Video;