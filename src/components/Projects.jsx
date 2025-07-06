import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Display: Smart Timetable and Attendance System",
    technologies: "Python, PyQt5, Face Recognition, Text-to-Speech, Real-Time Scheduling",
    description:
      "Designed and developed a smart classroom display system that manages real-time timetables, dynamic event updates, and automated face recognition-based attendance.",
  },
  {
    title: "Sudoku Solver",
    technologies: "Python",
    description: "A Python program to solve Sudoku puzzles using backtracking algorithm.",
  },
  {
    title: "E-commerce Shopping Website",
    technologies: "SQL, PHP, HTML, CSS",
    description: "Developed a complete e-commerce website with product listing, cart, and checkout.",
  },
  {
    title: "Currency Converter",
    technologies: "Java",
    description: "A Java application that converts currencies based on current exchange rates.",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(false);
  const [animateProps, setAnimateProps] = useState({ opacity: 1, y: 0 });

  useEffect(() => {
    let timer;
    if (hovered) {
      setAnimateProps({ opacity: 0, y: -20 });
      timer = setTimeout(() => {
        setAnimateProps({ opacity: 1, y: 0 });
      }, 500);
    } else {
      setAnimateProps({ opacity: 1, y: 0 });
      if (timer) clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [hovered]);

  return (
    <motion.section
      id="projects"
      className="bg-gradient-to-tr from-emerald-200 to-emerald-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-emerald-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="space-y-6 text-emerald-900"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        {projects.map(({ title, technologies, description }) => (
          <div key={title} className="bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="italic text-sm text-gray-600">{technologies}</p>
            <p className="mt-2">{description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
