import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center pb-2">
                {/* Page View Section */}
                <div className="text-center mb-8">
                    <p className="text-lg text-[#7a86ad] font-semibold mb-2">Page Views</p>
                    <div className="inline-block p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                        {/* External link opens in a new tab for a better UX */}
                        <a href="https://www.freecounterstat.com" title="Free Hit Counter" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="https://counter6.optistats.ovh/private/freecounterstat.php?c=1w4k7t56dghwl9h6p15fchwr5zrafq91" 
                                alt="Visitor hit counter" 
                                className="w-full h-auto rounded-lg"
                            />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Thanks for visiting!</p>
                </div>

                {/* Footer Information */}
                <div className='text-[#7a86ad] font-bold'>
                    Made With ❤️ By Swastik Mishra
                </div>
            </footer>
        </>
    );
};

export default Footer;
