// Main JSX React imports
import React from 'react';

// Routing Imports

// Component Imports
import BGVideo from '../video/JDA01.mp4';


// SCSS Imports
import '../scss/Home.scss';

// Video / Image Imports

// JSX Component and Return

const Home = () => {
    return(
        <div className="h-home">
            {/* Background Video */}
            <video id="h_id_video" autoPlay playsinline loop muted>
            <source src={BGVideo} type="video/mp4" />
            </video>
            <div id="jdatag"></div>
            <div id="nav">
            <a id="link1" href="/projects">Projects</a>
            <a id="link2" href="/education">Education</a>
            <a id="link3" href="/contact">Contact</a>
            </div>
            <div id="jdaimg">...</div>
            
        </div>
    );
}

// Default Export Method for Component
export default Home;
