import React from "react";

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
  return (
    <section
      id="skills"
      className="bg-white rounded-3xl shadow-lg p-8 animate-fadeInUp animation-delay-400"
    >
      <h2 className="text-3xl font-bold text-primary3 mb-6 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gradient-to-tr from-primary1 to-primary3 text-white font-semibold rounded-xl p-4 shadow-lg hover:scale-105 transition-transform cursor-default"
            title={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
