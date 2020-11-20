import React from 'react';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Features />
            <Clients />
        </>
    );
};

export default Home;
