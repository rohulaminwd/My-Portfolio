import React from 'react';
import Navbar from '../../Component/Navbar';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Banner></Banner>
            <div className='px-2 md:px-8 lg:px-16 ox-hidden'>
               <About />
               <Projects />
            </div>
            <Contact /> 
        </div>
    );
};

export default Home;