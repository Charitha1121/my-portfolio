// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Activities", href: "#activities" },
    { name: "Internships", href: "#internships" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-xs text-white font-semibold tracking-widest uppercase select-none">
            My Portfolio
          </span>
          <h1 className="text-3xl font-extrabold text-white leading-tight select-none text-gradient-animated">
            Boddupally Charitha
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-yellow-300 transition-colors duration-500 cursor-pointer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-gradient-to-b from-indigo-600 via-pink-600 to-yellow-500 text-white px-6 pb-6 space-y-4 text-center font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-yellow-300 transition-colors duration-500"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
