import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
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
      id="about"
      className="flex items-center space-x-10 bg-white rounded-3xl shadow-lg p-8 max-w-5xl mx-auto cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg flex-shrink-0">
        <img
          src="/charitha.jpeg"
          alt="Charitha"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 1, y: 0 }}
        animate={animateProps}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-indigo-700">About Me</h2>
        <p>
          I am a motivated and curious software engineer with a strong passion
          for coding and continuous learning. I actively seek out emerging
          technologies and tools that enhance Salesforce development, aiming to
          build scalable, efficient solutions. My goal is to contribute to
          innovative projects while expanding my expertise in Salesforce
          engineering.
        </p>
        <p>
          Contact me at: <br />
          <strong>Phone:</strong> 7093734585 <br />
          <strong>Email:</strong> boddupallycharitha@gmail.com
        </p>
      </motion.div>
    </motion.section>
  );
}
