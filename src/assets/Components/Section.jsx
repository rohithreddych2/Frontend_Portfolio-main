import React from 'react';

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-100 to-indigo-200 scroll-mt-20 animate-fade-in-up"
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide capitalize">
        {title}
      </h2>
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  </section>
);

export default Section;
