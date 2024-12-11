import React from 'react';
import { skills } from '../Portfolio.js'

const SkillsProgress = () => {
  return (
    // <div className="p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
    //   <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>

    <div id='skills' className="relative flex flex-col bg-clip-border text-gray-700 rounded-t-[12px] rounded-b-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.1)]">
    <div className="container px-5 pb-4 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-2 text-center">My Skills.</h1>
    </div>


    <div className='px-10 pb-10'>

      {/* First Row (Pair 1 & 2) */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex-1">
            <SkillProgress name={skills[0].name} percentage={skills[0].percentage} />
          </div>
          <div className="flex-1">
            <SkillProgress name={skills[1].name} percentage={skills[1].percentage} />
          </div>
        </div>

        {/* Second Row (Pair 3 & 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex-1">
            <SkillProgress name={skills[2].name} percentage={skills[2].percentage} />
          </div>
          <div className="flex-1">
            <SkillProgress name={skills[3].name} percentage={skills[3].percentage} />
          </div>
        </div>

        {/* Third Row (Pair 5 & 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex-1">
            <SkillProgress name={skills[4].name} percentage={skills[4].percentage} />
          </div>
          <div className="flex-1">
            <SkillProgress name={skills[5].name} percentage={skills[5].percentage} />
          </div>
        </div>
        {/* Forth Row (Pair 7 & 8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex-1">
            <SkillProgress name={skills[6].name} percentage={skills[6].percentage} />
          </div>
          <div className="flex-1">
            <SkillProgress name={skills[7].name} percentage={skills[7].percentage} />
          </div>
        </div>
        {/* Fifth Row (Pair 9 & 10) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex-1">
            <SkillProgress name={skills[8].name} percentage={skills[8].percentage} />
          </div>
          <div className="flex-1">
            <SkillProgress name={skills[9].name} percentage={skills[9].percentage} />
          </div>
        </div>

        {/* Last Skill (Single item) */}
        {/* <div className="flex justify-center">
        <div className="flex-1">
        <SkillProgress name={skills[6].name} percentage={skills[6].percentage} />
        </div>
        </div> */}
        </div>
      </div>
  );
};

// A reusable component for individual skill progress bar
const SkillProgress = ({ name, percentage }) => {
  return (
    <div className="w-full">
      <label className="block text-lg font-semibold text-gray-800 mb-2">{name}</label>
      <div className="relative w-full bg-gray-200 rounded-full h-4">
        <div
          className="absolute top-0 left-0 bg-blue-500 h-full rounded-full flex items-center justify-center"
          style={{ width: `${percentage}%` }}
        >
          <span className="text-white text-sm font-semibold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;
