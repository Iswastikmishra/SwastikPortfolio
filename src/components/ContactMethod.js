import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactMethod = () => {
    return (
        <>
            <div className='w-full md:py-8 mt-8 md:mt-0 flex items-center justify-center text-4xl'>
                
                {/* Google Search Link with aria-label and title for accessibility */}
                <a
                    href={'https://www.google.com/search?q=Swastik+Mishra'}
                    className='px-2 text-orange-800 hover:text-orange-950'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Search for Swastik Mishra on Google"
                    title="Search for Swastik Mishra"
                >
                    <FaGoogle />
                </a>
                
                {/* Gmail Link with aria-label and title */}
                <a
                    href={'mailto:swastikmishra413@gmail.com'}
                    className='px-2 text-red-800 hover:text-red-950'
                    aria-label="Email Swastik Mishra"
                    title="Send an email to Swastik Mishra"
                >
                    <SiGmail />
                </a>
                
                {/* LinkedIn Profile Link with aria-label and title */}
                <a
                    href={'https://www.linkedin.com/in/iswastikmishra'}
                    className='px-2 text-sky-600 hover:text-sky-950'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Swastik Mishra's LinkedIn profile"
                    title="View LinkedIn Profile"
                >
                    <FaLinkedin />
                </a>
                
                {/* GitHub Profile Link with aria-label and title */}
                <a
                    href={'https://www.github.com/iswastikmishra'}
                    className='px-2 text-black hover:text-[rgb(31,43,66)]'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Swastik Mishra's GitHub profile"
                    title="View GitHub Profile"
                >
                    <FaGithub />
                </a>
                
            </div>
        </>
    );
};

export default ContactMethod;
