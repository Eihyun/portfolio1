import React from 'react';
import VideoJS from './VideoJS';

import './TabContent.css';

import logoVideo from '../video/LogoAnimation.mp4';
import mythBustersVideo from '../video/MythBusters.mp4';
import extraLVideo from '../video/ExtraL.mp4';

function Video() {
    const videos = [
        {
            title: 'Logo',
            label: 'Eihyun\'s Logo Animation',
            src: logoVideo,
            description: 'An animated intro bumper as a parody of the Pixar intro, giving the logo a life of its own.'
        },
        {
            title: 'MythBusters',
            label: 'Myth Busters Animation',
            src: mythBustersVideo,
            description: 'A 2D Mythbuster style animation, using motion graphics, background music, and sound effects.'
        },
        {
            title: 'ExtraL',
            label: 'Extra L - Jennie & Doechii',
            src: extraLVideo,
            description: "A fan-made lyric video that uses modern UI elements to amplify the lyrics, mixing graphic illustrations that pop in sync with the beat."
        },
    ];

    return (
        <div className="video-gallery col-12-md col-4-sm">
            {videos.map((video, index) => (
            <div key={index} className="video-item pretendard">
                <VideoJS
                options={{
                    autoplay: false,
                    controls: true,
                    responsive: true,
                    fluid: true,
                    sources: [{ src: video.src, type: 'video/mp4' }],
                    poster: `/images/Preview_${video.title}.png`
                }}
                onReady={(player) => {
                    // Optional event hooks
                    player.on('waiting', () => console.log(`${video.title} is buffering`));
                    player.on('dispose', () => console.log(`${video.title} player disposed`));
                }}
                className="video-player"
                />
                <h2 className="video-title">{video.label}</h2>
                <p>{video.description}</p>
            </div>
            ))}
        </div>
        );
    }

export default Video;