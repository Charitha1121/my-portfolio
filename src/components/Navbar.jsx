import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left side - Portfolio title */}
        <div className="flex flex-col">
          <span className="text-xs text-white font-semibold tracking-widest uppercase select-none">
            My Portfolio
          </span>
          <h1 className="text-3xl font-extrabold text-white leading-tight select-none">
            Boddupally Charitha
          </h1>
        </div>

        {/* Right side - Navigation links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Education", href: "#education" },
            { name: "Certifications", href: "#certifications" },
            { name: "Hackathons", href: "#hackathons" },
            { name: "Activities", href: "#activities" },
            { name: "Internships", href: "#internships" },
            { name: "Contact", href: "#contact" },
          ].map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
