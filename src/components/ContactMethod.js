import React from 'react'
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const ContactMethod = () => {
    return (
        <>
            <div className='w-full md:py-8 mt-8 md:mt-0 flex items-center justify-center text-4xl'>
                <Link to={'https://www.google.com/search?q=Swastik+Mishra'} className='px-2 text-orange-800 hover:text-orange-950'><FaGoogle /></Link>
                <Link to={'mailto:swastikmishra413@gmail.com'} className='px-2 text-red-800 hover:text-red-950'><SiGmail /></Link>
                <Link to={'https://www.linkedin.com/in/iswastikmishra'} className='px-2 text-sky-600 hover:text-sky-950'><FaLinkedin /></Link>
                <Link to={'https://www.github.com/iswastikmishra'} className='px-2 text-black hover:text-[rgb(31,43,66)]'><FaGithub /></Link>
            </div>
        </>
    )
}

export default ContactMethod