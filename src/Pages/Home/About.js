import React from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import resome from './PH-resome (Autosaved).pdf'
import './Home.css'

const About = () => {
    
    return (
        <div id='About' className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-cyan-900 my-8 uppercase font-bold text-3xl md:text-5xl'>About Me</h1>
            <div className="md:flex">
                <div class="hero-content px-0 flex-col md:flex-row-reverse">
                    <div className="grid w-full md:w-[80%] grid-cols-2 gap-4" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 md:p-5 text-center w-full">
                                <div class="stat-value"><CountUp duration={2} end={1} />+</div>
                                <div class="font-bold text-cyan-900">Years Of Experience</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 md:p-5 text-center w-full">
                                <div class="stat-value"><CountUp duration={3} end={24} />+</div>
                                <div class="font-bold text-cyan-900">Complete Project</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 md:p-5 text-center w-full">
                                <div class="stat-value"><CountUp duration={2} end={15} />+</div>
                                <div class="font-bold text-cyan-900">Complete Project</div>
                            </div>
                        </div>
                        <div class="w-full rounded-xl shadow-box">
                            <div class="p-3 md:p-5 text-center w-full">
                                <div class="stat-value"><CountUp duration={2} end={2} /></div>
                                <div class="font-bold text-cyan-900">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className='ox-hidden' data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
                        <h1 className='text-xl text-primary font-bold'>My Names Rohul Amin</h1>
                        <h1 class="md:text-2xl flex gap-x-3 text-cyan-900 font-bold"  data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                        I am  <span className='text-green-600'>
                                <Typewriter
                                options={{
                                    strings: [
                                        " Web developer",
                                        " React Developer",
                                        " Font End developer"
                                    ],
                                    autoStart: true,
                                    delay: 40,
                                    loop: true,
                                }}
                                />
                            </span></h1>
                        <p class="my- lg:my-4"  data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800">I am a junior MERN Stack web developer, Hardworking IT professional with huge knowledge and proficiency in Javascript, React Js, HTML, and CSS with a focus on front-end development.</p>
                        <a href={resome} download>
                        <button class="btn btn-secondary text-white btn-sm"  data-aos="zoom-in-right" data-aos-delay="400" data-aos-duration="800">Download Resume</button>
                        </a>
                    </div>
                </div>  
            </div>
            <h1 className='text-2xl font-bold'>Coding Skills</h1>
            <div className="grid grid-cols-1 gap-3 my-5 sm:gap-5 sm:grid-cols-2">
                <div className="grid gap-2" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800">
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>HTML</h1>
                            <h1 className='text-primary mb-0 font-bold'><CountUp duration={2} end={95} />%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="95" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>css</h1>
                            <h1 className='text-primary mb-0 font-bold'>90%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="90" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>Tailwind css</h1>
                            <h1 className='text-primary mb-0 font-bold'>80%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="80" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>BootStrap css</h1>
                            <h1 className='text-primary mb-0 font-bold'>90%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="90" max="100"></progress>
                    </div>
                </div>
                <div className="grid gap-2" data-aos="zoom-in-left" data-aos-delay="400" data-aos-duration="800">
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>JavaScript</h1>
                            <h1 className='text-primary mb-0 font-bold'>60%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="60" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>React JS</h1>
                            <h1 className='text-primary mb-0 font-bold'>80%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="80" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>Node Js</h1>
                            <h1 className='text-primary mb-0 font-bold'>40%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="40" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className='text-blue-500 mb-0 font-bold'>Mongodb</h1>
                            <h1 className='text-primary mb-0 font-bold'>50%</h1>
                        </div>
                        <progress class="progress progress-primary mt-0 h-[16px] w-full" value="50" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;