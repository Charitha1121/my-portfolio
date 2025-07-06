import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const activities = [
  "Champion: Chess, Annual Sports, Sphoorthy Engineering College, 2024",
  "Runner-up: Blind Code Challenge",
];

export default function Activities() {
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
      id="activities"
      className="bg-gradient-to-tr from-rose-200 to-rose-400 rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.h2
        className="text-3xl font-bold text-rose-900 mb-6 text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Extra Curricular Activities
      </motion.h2>

      <motion.ul
        className="list-disc pl-6 space-y-2 text-rose-900 text-lg"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
      >
        {activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
