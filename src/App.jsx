import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Hackathons from "./components/Hackathons.jsx";
import Activities from "./components/Activities.jsx";
import Internships from "./components/Internships.jsx";
import Contact from "./components/Contact.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-yellow-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-3 px-5 py-2 bg-white text-indigo-700 font-semibold rounded-full shadow hover:scale-105 hover:bg-yellow-200 transition-transform"
        >
          📄 Download Resume
        </a>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Hackathons />
        <Activities />
        <Internships />
        <Contact />
      </main>
      <footer className="bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-white text-center py-6 mt-16 shadow-inner">
        <p className="text-sm mb-2">&copy; 2025 Boddupally Charitha. Built with 💖 using React & Tailwind CSS</p>
        <div className="flex justify-center space-x-6 text-white text-2xl">
          <a
            href="https://github.com/Charitha1121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/boddupally-charitha-3a0385277/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
