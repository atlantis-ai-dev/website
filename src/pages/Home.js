import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Portfolio />
            <Clients />
            <Testimonials />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

