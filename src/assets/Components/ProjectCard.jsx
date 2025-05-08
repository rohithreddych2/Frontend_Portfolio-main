import React from 'react';

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{title}</h3>
      <p className="text-gray-700 mb-5">{description}</p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition-all duration-300 transform hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
