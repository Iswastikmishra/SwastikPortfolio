import React from 'react'
// import { info, NameLogo } from '../Portfolio.js'
// import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div id='about' className="rounded-xl shadow-mdrounded-t-[12px] rounded-b-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.1)]">

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 pb-4 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-2 text-center">About Me</h1>

                    <div className="lg:w-4/5 ml-auto flex flex-wrap py-4">
                        <div className="w-80 h-80 rounded-full overflow-hidden object-center flex items-center justify-center mx-auto lg:mx-0">
                            <img alt="ecommerce" className="object-cover lg:w-80 lg:h-80 w-full h-full object-center" src="dp4.jpg" />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center text-center lg:text-start">
                            <p className="leading-relaxed text-lg mb-4">
                                Hello, I'm Swastik Mishra, a 21-year-old Web Developer and Computer Science Engineer living in Bengaluru, India.
                            </p>
                            <p className="leading-relaxed text-lg mb-4">
                                I have completed my Bachelors of Technology [2020-2024] in Computer Science stream from Vindhya Institute of Technology and Science, Satna (M.P.).
                            </p>
                            <p className="leading-relaxed text-lg mb-4">
                                With a deep passion for core system subjects like Operating Systems, Data Structures, Algorithms, and Computer Organization.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">160 000</h2>
                            <p className="leading-relaxed">Lines of Code</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">301 783 509</h2>
                            <p className="leading-relaxed">Pixels rendered</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1512</h2>
                            <p className="leading-relaxed">Cups of coffee drunk</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">6</h2>
                            <p className="leading-relaxed">Projects completed</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About