import React from 'react';

const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300">
      <h3 className="text-2xl font-semibold text-indigo-700 hover:text-indigo-800 transition duration-300">{title}</h3>
      <p className="text-gray-600 font-medium mt-2">{company} — <span className="text-indigo-600 font-semibold">{duration}</span></p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        {description.map((point, index) => (
          <li key={index} className="hover:text-indigo-600 transition duration-300">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
