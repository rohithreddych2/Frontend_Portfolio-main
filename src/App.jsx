import React from 'react';
import NavBar from './assets/Components/NavBar.jsx';
import Section from './assets/Components/Section.jsx';
import SkillCard from './assets/Components/SkillCard.jsx';
import ExperienceCard from './assets/Components/ExperienceCard.jsx';
import ProjectCard from './assets/Components/ProjectCard.jsx';
import { User, Code, Briefcase, FolderOpen, Mail, Linkedin, Github, Laptop } from 'lucide-react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-white text-gray-900 font-sans scroll-smooth">
      {/* Landing Hero Section */}
      <div
        id="landing"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-100 via-green-100 to-white text-center px-6"
      >
        {/* Animated Heading */}
        <h1 className="text-6xl font-extrabold text-green-800 animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm Divyaarchana Vathala
        </h1>

        {/* Description */}
        <p className="mt-4 text-xl text-gray-600 max-w-xl animate__animated animate__fadeIn animate__delay-1.5s">
          A self-motivated Computer Science Engineer specializing in Software
          Development, Machine Learning, and Web Development. Passionate about
          solving real-world problems using innovative and intelligent solutions.
        </p>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__fadeIn animate__delay-2s">
          {/* Explore Button */}
          <a
            href="#projects"
            className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 hover:scale-105 transition transform duration-300 ease-in-out"
          >
            Explore
          </a>

          {/* Connect Button */}
          <a
            href="#contact"
            className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 hover:scale-105 transition transform duration-300 ease-in-out"
          >
            Connect with me
          </a>
        </div>
      </div>

      <NavBar />

      {/* About Me Section */}
      <section
        id="about"
        className="py-16 px-6 bg-white text-center space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-teal-600">About Me</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          I am a Computer Science Engineer with a passion for Software
          Development, Machine Learning, and Web Technologies. With strong
          proficiency in programming languages like C, Python, Java, and Web
          Development technologies, I strive to create meaningful solutions
          through innovative approaches.
        </p>
      </section>

      {/* Skills Section */}
      <Section id="skills" title={<><Code className="inline w-5 h-5 mr-2" />Technical Skills</>} >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <SkillCard category="Programming Languages" skills={["C", "Python", "Java"]} />
          <SkillCard category="Web Development" skills={["HTML", "CSS", "JavaScript"]} />
          <SkillCard category="Machine Learning" skills={["TensorFlow", "Scikit-Learn", "Keras", "Pandas", "NumPy"]} />
          <SkillCard category="Database Management" skills={["SQL", "MySQL", "DBMS"]} />
          <SkillCard category="Tools & Technologies" skills={["Git", "GitHub", "Linux", "VS Code", "Anaconda"]} />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title={<><Briefcase className="inline w-5 h-5 mr-2" />Education</>} >
        <div className="max-w-3xl mx-auto text-center px-4 py-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Auburn University at Montgomery</h3>
          <p className="text-lg text-gray-700 mt-2">Bachelor's in Computer Science</p>
          <p className="text-gray-600 mt-4">Specialized in Python, Java, Web Technologies, and Database Management. Gained hands-on experience in solving complex problems and building real-world applications.</p>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title={<><FolderOpen className="inline w-5 h-5 mr-2" />Projects</>} >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <ProjectCard 
            title="Medical Cost Prediction"
            description="A Machine Learning project to predict the medical cost of individuals based on various factors using Anaconda Navigator."
            technologies={["Python", "Machine Learning", "Scikit-Learn", "Anaconda"]}
          />
          <ProjectCard 
            title="Diabetes Classification"
            description="A Machine Learning project to predict whether or not a patient has diabetes based on diagnostic data."
            technologies={["Python", "Machine Learning", "TensorFlow", "Scikit-Learn"]}
          />
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title={<><Code className="inline w-5 h-5 mr-2" />Certifications</>} >
        <div className="space-y-6 animate-fade-in">
          <p className="text-gray-600">- Internship on Machine Learning with Python</p>
          <p className="text-gray-600">- Certification in Programming Essentials in Python</p>
          <p className="text-gray-600">- Certification for Completion of Java Training</p>
          <p className="text-gray-600">- Certification for Completion of Source Code Management Using Git & GitHub</p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={<><Mail className="inline w-5 h-5 mr-2" />Contact</>} >
        <div className="text-center space-y-3 animate-fade-in">
          <p className="text-gray-600 flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <a href="mailto:vdivyaarchana9652@gmail.com" className="text-teal-600 hover:underline">vdivyaarchana9652@gmail.com</a>
          </p>
          <p className="text-gray-600 flex justify-center items-center gap-2">
            <Laptop className="w-5 h-5 text-teal-600" />
            +91 9652866335
          </p>
          <div className="space-x-4 flex justify-center">
            <a href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav" className="flex items-center gap-1 text-teal-600 hover:underline">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://github.com/Divyaarchana" className="flex items-center gap-1 text-teal-600 hover:underline">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="bg-gray-800 text-white py-4 mt-12 animate-fade-in">
        <div className="container mx-auto text-center">
          <p>© 2025 Divyaarchana Vathala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
