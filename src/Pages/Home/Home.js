import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Review from './Review';
import Service from './Service';

const Home = ({handleProject}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <div className='px-2 md:px-8 lg:px-16 ox-hidden'>
               <About />
               <Service />
               <Projects handleProject={handleProject} />
               <Review />
            </div>
            <Contact /> 
        </div>
    );
};

export default Home;