import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

        <section id="about" className="scroll-mt-20 animate-fadeInUp animation-delay-200">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20 animate-fadeInUp animation-delay-400">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20 animate-fadeInUp animation-delay-600">
          <Projects />
        </section>

        <section id="education" className="scroll-mt-20 animate-fadeInUp animation-delay-800">
          <Education />
        </section>

        <section id="certifications" className="scroll-mt-20 animate-fadeInUp animation-delay-1000">
          <Certifications />
        </section>

        <section id="hackathons" className="scroll-mt-20 animate-fadeInUp animation-delay-1200">
          <Hackathons />
        </section>

        <section id="activities" className="scroll-mt-20 animate-fadeInUp animation-delay-1400">
          <Activities />
        </section>

        <section id="internships" className="scroll-mt-20 animate-fadeInUp animation-delay-1600">
          <Internships />
        </section>

        <section id="contact" className="scroll-mt-20 animate-fadeInUp animation-delay-1800">
          <Contact />
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-white text-center py-6 mt-16 shadow-inner">
        <div className="flex justify-center space-x-6 mb-2">
          <a
            href="https://github.com/Charitha1121"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/charitha-boddupally/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm">
          &copy; 2025 Boddupally Charitha. Built with 💖 using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
