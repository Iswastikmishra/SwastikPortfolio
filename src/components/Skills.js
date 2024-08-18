import React from 'react'
import { chartConfig } from '../Portfolio.js'
import ApexCharts from 'react-apexcharts';

const Skills = () => {
    return (
        <>
            <div id='skills' className="relative flex flex-col bg-clip-border text-gray-700 rounded-t-[12px] rounded-b-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.1)]">
                <div className="container px-5 pb-4 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-2 text-center">My Skills.</h1>
                </div>

                <div className="px-2 pb-0">
                    <div id="skills-chart">
                        <ApexCharts options={chartConfig} series={chartConfig.series} type="bar" height={400} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills