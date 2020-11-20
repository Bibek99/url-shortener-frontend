import React from 'react';
import InputUrl from './InputUrl';
import ShortUrl from './ShortUrl';

const Hero = () => {
    return (
        <div className="container hero">
            <div className="row">
                <div className="main-tag col-12 col-lg-8 mx-auto">
                    A Powerful URL Shortener
                </div>
            </div>
            <div className="row">
                <div className="sec-tag col-12 col-lg-8 mx-auto">
                    Get going with your growth curve with these short and
                    powerful tools to shorten and monitor your links.
                </div>
            </div>
            <InputUrl />
            <ShortUrl />
        </div>
    );
};

export default Hero;
