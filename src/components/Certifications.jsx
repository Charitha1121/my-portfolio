import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certifications = [
  "HackerRank: C (Basic) - 2023",
  "HackerRank: Java (Basic) - 2024",
  "Great Learning: Data Structures in C - 2024",
  "Simplilearn: Introduction to SQL - 2025",
];

export default function Certifications() {
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
      id="certifications"
      className="bg-gradient-to-tr from-purple-200 to-purple-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-purple-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Certifications
      </motion.h2>

      <motion.ul
        className="list-disc pl-6 space-y-2 text-purple-900 text-lg"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
