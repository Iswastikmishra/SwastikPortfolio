import React from 'react'
import ContactMethod from './ContactMethod'
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
    return (
        <>
            {/* <div className='rounded-t-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_0px_rgba(0,0,0,0.1)]'> */}
            <div id='contact' className='rounded-t-[12px] shadow-[0_-2px_5px_0_rgba(0,0,0,0.1)]'>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-2 mx-auto"></div>
                    <div className="text-center mb-20">
                        <div className='container px-5 pb-4 mx-auto'>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Get In Touch.</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"><span className='font-extrabold text-[rgb(35,52,86)]'>Let’s turn ideas into reality! </span> Whether you have a project in mind, a question about my work, or just want to chat about the latest tech trends, I’d love to hear from you. Drop me a line, and let’s start a conversation!.</p>
                        </div>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps?width=100%&height=100%&hl=en&q=VGP+Layout,+Bengaluru&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4);' }}></iframe>



                            {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">VGP Layout, Kudlu, Bengaluru, Karnataka, India</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">swastikmishra413@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div> */}
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 md:ml-auto ">
                            <ContactMethod />
                            <div className="flex items-center justify-center text-2xl mx-auto text-gray-500s pb-8 text-center"><span className='font-extrabold text-[rgb(35,52,86)]'>Feel free to reach out, and I’ll get back to you as soon as possible.</span>
                            </div>
                            <div>

                                {/* <div className="flex items-center justify-center text-2xl mx-auto text-gray-500s pb-8 text-center">
                                    <div className='font-extrabold text-[rgb(35,52,86)] flex flex-row object-center'>
                                    <span> <CiLocationOn /></span>
                                    <span>VGP Layout, Kudlu, Bengaluru (India).</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <ContactMethod />
                        <div className="flex items-center justify-center text-2xl mx-auto text-gray-500s pb-8 text-center"><span className='font-extrabold text-[rgb(35,52,86)]'>Feel free to reach out, and I’ll get back to you as soon as possible.</span>
                        </div>
                    </div> */}
                </section>
            </div>
        </>
    )
}

export default Contact