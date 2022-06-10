import React from 'react';
import { Link } from 'react-scroll';
import rohul from '../images/rohul1.png'


const Navbar = () => {
    const menuItems = <div className='lg:flex'>
        <li><button className='btn btn-ghost'>
            <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </button></li>
        <li><button className='btn btn-ghost'>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-120} duration={500}>About</Link>
        </button></li>
        <li><button className='btn btn-ghost'>
            <Link activeClass="active" to="Project" spy={true} smooth={true} offset={-100} duration={500}>Project</Link>
        </button></li>
        <li><button className='btn btn-ghost'>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
        </button></li>  
    </div>
    return (
        <div className='fixed top-0 z-50 font-bold left-0 bg-cyan-900 text-white w-full'>
            <div class="navbar max-w-7xl mx-auto">
                <div class="flex-1">
                    <div class="avatar">
                        <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={rohul}  alt='rohul'/>
                        </div>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Rohul Amin</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal font-bold p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end text-cyan-900 lg:text-white lg:hidden">
                        <label tabindex="1" className="btn p-0 btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;