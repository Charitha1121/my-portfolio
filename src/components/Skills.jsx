import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  "Problem Solving",
  "Time Management",
  "Project Management Skills",
  "Good Team Player",
  "C (Intermediate)",
  "Python (Intermediate)",
  "Java (Basic)",
  "HTML",
  "CSS",
  "JavaScript",
];

export default function Skills() {
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
      id="skills"
      className="bg-gradient-to-tr from-sky-200 to-indigo-300 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(14, 116, 144, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold text-sky-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(14, 116, 144, 0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-tr from-sky-400 to-indigo-500 text-white font-semibold rounded-xl p-4 shadow-lg cursor-default"
            title={skill}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
