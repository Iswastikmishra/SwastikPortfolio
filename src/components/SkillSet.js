import React from 'react';
import { skills } from '../Portfolio.js';

const SkillsProgress = () => {
  return (
    <div id='skills' className="relative flex flex-col bg-clip-border text-gray-700 rounded-t-[12px] rounded-b-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.1)]">
      <div className="container px-5 pb-4 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-2 text-center">My Skills.</h1>
      </div>

      <div className='px-10 pb-10'>
        {/* Grouping skills dynamically in rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex-1">
              <SkillProgress name={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
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
