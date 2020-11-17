import React from 'react';
import InputUrl from './InputUrl';

const Hero = () => {
    return (
        <div className="container hero">
            <div className="main-tag">A Powerful URL Shortener</div>
            <div className="sec-tag">
                Get going with your growth curve with these short and powerful
                tools to shorten and monitor your links.
            </div>
            <InputUrl />
        </div>
    );
};

export default Hero;
