import React from 'react';
import { info } from '../Portfolio.js'; 
import ContactMethod from './ContactMethod.js';

const Content = () => {
    return (
        <>
            {/* Main Section */}
            <section className="text-gray-600 body-font overflow-hidden shadow-md rounded-xl">
                <div className="container px-5 pb-24 pt-8 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center text-center lg:text-start">
                        {/* Text Content */}
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Hello There! I am</h2>
                            <h1 className="title-font mb-4 font-medium text-4xl md:text-6xl text-[rgb(35,52,86)]">{info.Name}</h1>
                            <p className="leading-relaxed mb-4">
                                {info.Description || 'Transforming innovative ideas into seamless, user-centric digital experiences through cutting-edge technology and meticulous design.'}
                            </p>
                            <ContactMethod />
                        </div>

                        {/* Profile Image */}
                        <img
                            alt={`Profile picture of ${info.Name}`}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src="https://iili.io/HjECcIR.png"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;
