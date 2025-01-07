import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { NameLogo } from '../Portfolio.js';

const Header = () => {

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    {/* Logo Section */}
                    <RouterLink to={'/SwastikPortfolio'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                        <span className="ml-3 text-xl" style={NameLogo}>&lt;Swastik Mishra/&gt;</span>
                    </RouterLink>

                    {/* Navigation Links */}
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ScrollLink to="about" smooth={true} duration={500} className="nav-link mx-2 cursor-pointer">About</ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500} className="nav-link mx-2 cursor-pointer">Skills</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} className="nav-link mx-2 cursor-pointer">Projects</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className="nav-link mx-2 cursor-pointer">Contact Me</ScrollLink>
                        <RouterLink to={'/chin_tapak_dum_dum'} className="nav-link mx-2 cursor-pointer">PNF</RouterLink>
                    </nav>

                    {/* Resume Download Button */}
                    <RouterLink to={'/SwastikPortfolio/SwastikMishra.pdf'} target='_blank' aria-label="Download Resume">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Resume
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </RouterLink>
                </div>
            </header>
        </>
    )
}

export default Header;
