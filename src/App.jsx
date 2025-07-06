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

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-yellow-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
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
        <p className="text-sm">&copy; 2025 Boddupally Charitha. Built with 💖 using React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
