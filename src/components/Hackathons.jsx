import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hackathons() {
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
      id="hackathons"
      className="bg-gradient-to-tr from-lime-200 to-lime-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-lime-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        Hackathons
      </motion.h2>

      <motion.p
        className="text-lime-900 text-center text-lg"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        Participated in 36hrs hackathon, Sphoorthy Engineering College, 2024
      </motion.p>
    </motion.section>
  );
}
