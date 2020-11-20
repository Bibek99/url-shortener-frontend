import React from 'react';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Unlock from '../components/Unlock';

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Features />
            <Clients />
            <Unlock />
        </>
    );
};

export default Home;
