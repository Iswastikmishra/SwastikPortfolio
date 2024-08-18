import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { NameLogo } from '../Portfolio.js'

const Header = () => {

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <RouterLink to={'/SwastikPortfolio'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span> */}
                        <span className="ml-3 text-xl" style={NameLogo}>&lt;Swastik Mishra/&gt;</span>
                    </RouterLink>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ScrollLink to="about" smooth={true} duration={500} className="mr-5 hover:text-gray-900 cursor-pointer">About</ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500} className="mr-5 hover:text-gray-900 cursor-pointer">Skills</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} className="mr-5 hover:text-gray-900 cursor-pointer">Projects</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className="mr-5 hover:text-gray-900 cursor-pointer">Contact Me</ScrollLink>
                        <RouterLink to={'/chin_tapak_dum_dum'} className="mr-5 hover:text-gray-900 cursor-pointer">PNF</RouterLink>
                    </nav>
                    <RouterLink to={'/SwastikMishra.pdf'} target='_blank'>

                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Resume
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </RouterLink>
                </div>
            </header>
        </>
    )
}

export default Header