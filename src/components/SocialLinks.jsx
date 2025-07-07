import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8 text-2xl text-indigo-700 dark:text-yellow-300">
      <a
        href="https://github.com/Charitha1121"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/boddupally-charitha-3a0385277"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
