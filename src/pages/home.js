import React from 'react';
import Disclaimer from '../components/Disclaimer';

import Features from '../components/Features';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Unlock from '../components/Unlock';

const Home = () => {
    return (
        <>
            <Disclaimer />
            <Nav />
            <Hero />
            <Features />
            <Unlock />
        </>
    );
};

export default Home;
