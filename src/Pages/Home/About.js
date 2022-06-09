import React from 'react';
import './Home.css'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-cyan-900 my-8 uppercase font-bold text-3xl md:text-5xl'>About Me</h1>
            <div className="md:flex">
                <div class="hero-content px-0 flex-col md:flex-row-reverse">
                    <div className="grid w-full md:w-[80%] grid-cols-2 gap-4">
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 w-full">
                                <div class="stat-title">Total Page Views</div>
                                <div class="stat-value">89,400</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 w-full">
                                <div class="stat-title">Total Page Views</div>
                                <div class="stat-value">89,400</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 w-full">
                                <div class="stat-title">Total Page Views</div>
                                <div class="stat-value">89,400</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 w-full">
                                <div class="stat-title">Total Page Views</div>
                                <div class="stat-value">89,400</div>
                            </div>
                        </div>
                    </div>
                <div className='ox-hidden'>
                    <h1 class="md:text-xl text-cyan-300 uppercase font-bold"  data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">Welcome to..</h1>
                    <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold"  data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800"><span className='text-accent'>Nabojagoron</span> Academy!</h1>
                    <p class="my- lg:my-4"  data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="800">Keep Your Vehicle in Great Condition with Top Auto Parts, Engineered for your best workout yet, Select YOur auto parts..</p>
                    <button class="btn btn-secondary btn-sm text-white"  data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="800">Contact Me</button>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default About;