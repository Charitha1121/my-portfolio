import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Education() {
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
      id="education"
      className="bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-indigo-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Education
      </motion.h2>

      <motion.div
        className="text-indigo-900 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold">B-Tech Computer Science Engineering</h3>
        <p className="mt-1">Sphoorthy Engineering College</p>
        <p className="mt-1 font-semibold">CGPA: 9.2</p>
      </motion.div>
    </motion.section>
  );
}
