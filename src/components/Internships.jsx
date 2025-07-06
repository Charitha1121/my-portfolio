import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const internships = [
  "Android Developer – Virtual Internship",
  "AI-ML – Virtual Internship",
  "Website Design and Development",
];

export default function Internships() {
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
      id="internships"
      className="bg-gradient-to-tr from-teal-200 to-teal-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-teal-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Internships
      </motion.h2>

      <motion.ul
        className="list-disc pl-6 space-y-2 text-teal-900 text-lg"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        {internships.map((internship) => (
          <li key={internship}>{internship}</li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
