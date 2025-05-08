import React, { useState } from 'react';
import { ShieldUser } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-wide flex items-center gap-3">
          <ShieldUser className="w-8 h-8 text-yellow-300" />
          Divyaarchana <span className="text-yellow-300">Vathala</span>
        </h1>

        {/* Desktop Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-white hover:text-yellow-300 relative group transition duration-300"
            >
              <span className="group-hover:border-b-4 group-hover:border-yellow-300 pb-1">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 md:hidden py-4 px-6`}
      >
        {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="block text-white text-2xl py-2 hover:text-yellow-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
