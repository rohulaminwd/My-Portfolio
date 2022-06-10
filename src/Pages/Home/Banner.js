import React from 'react';
import rohul from '../../images/Rohul.png'
import {FiLinkedin} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import {FaPhone} from 'react-icons/fa'
import resome from './PH-resome (Autosaved).pdf'
import { Link } from 'react-scroll/modules';
import Chating from '../../Component/Chating';

const Home = () => {
    return (
        <div id='Home' className='max-w-7xl mx-auto ox-hidden'>
            <div class="hero mt-16 bg-cyan-900 lg:w-full">
            <div class="hero-content px-2 sm:px-4 md:px-8 lg:px-16 flex-col md:flex-row-reverse">
                <div className="border-8 relative shadow-xl border-white rounded-lg ">
                  <img src={rohul} class="md:max-w-md mx-auto" />
                    <div className="absolute right-0 top-40 w-36 h-52 rounded-lg">
                        <Chating />
                    </div>
                </div>
                <div className='ox-hidden'>
                    <h1 class="md:text-xl text-cyan-300 font-bold"  data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">Hi There! 👋🏻</h1>
                    <h1 class="text-2xl sm:text-3xl md:text-5xl text-white font-bold"  data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800"><span className='text-accent'>This is </span>Rohul amin!</h1>
                    <p class="my-2 text-white lg:my-4 sm:w-3/4"  data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="800">I am a junior MERN Stack web developer, Hardworking IT professional with huge knowledge and proficiency in Javascript, React Js, HTML, and CSS with a focus on front-end development.</p>
                    <div className="flex">
                    <button class="btn btn-secondary md:btn-md btn-sm text-white"  data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="800">
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-150} duration={500}>Contact Me</Link>
                    </button>
                    <div className="flex ml-3 gap-x-3 items-center text-white text-2xl">
                        <div className=""><a href="https://www.linkedin.com/in/rohulaminwd/"><FiLinkedin /></a></div>
                        <div className=""><a href='mailto:rohulamin@gmail.com'><SiGmail /></a></div>
                        <div className=""><a href='tel:01831294559'><FaPhone /></a></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;