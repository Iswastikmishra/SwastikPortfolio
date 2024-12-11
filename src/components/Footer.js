import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="text-center pb-2">
                {/* <div className='text-[#7a86ad] font-bold text-center'>
                    <a href="https://www.freecounterstat.com" title="page view counter">
                    <img src="https://counter2.optistats.ovh/private/freecounterstat.php?c=k74yaupfsec8bf48l5z8arlwyd9m821l" border="0" title="page view counter" alt="page view counter" />
                    </a>
                    </div> */}

                <div className="text-center mb-8">
                    <p className="text-lg text-[#7a86ad] font-semibold mb-2">Page Views</p>
                    <div className="inline-block p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                        {/* <a href="https://www.freecounterstat.com" title="page view counter" className="block">
                            <img
                                src="https://counter2.optistats.ovh/private/freecounterstat.php?c=k74yaupfsec8bf48l5z8arlwyd9m821l"
                                alt="page view counter"
                                border="0"
                                className="w-full h-auto rounded-lg"
                            />
                        </a> */}

                        <a href="https://www.freecounterstat.com" title="free hit counter"><img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=1w4k7t56dghwl9h6p15fchwr5zrafq91" border="0" title="free hit counter" alt="free hit counter" /></a>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Thanks for visiting!</p>
                </div>
                <div className='text-[#7a86ad] font-bold'>Made With ❤️ By Swastik Mishra</div>

            </footer>
        </>
    )
}

export default Footer