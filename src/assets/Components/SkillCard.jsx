import React from 'react';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:scale-[1.05] group">
      <h4 className="text-2xl font-semibold text-blue-800 mb-6 tracking-wide border-b-2 pb-2 group-hover:text-blue-900 transition-all duration-300">
        {category}
      </h4>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
