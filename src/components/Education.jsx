// src/components/Education.jsx
import React from "react";

const educationDetails = [
  {
    degree: "B-Tech - Computer Science & Engineering",
    institution: "Sphoorthy Engineering College",
    cgpa: "9.2",
    year: "2027",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white rounded-3xl shadow-lg p-8 animate-fadeInUp max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-primary3 mb-6 text-center text-gradient-animated">
        Education
      </h2>
      <div>
        {educationDetails.map(({ degree, institution, cgpa, year }, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p>{institution}</p>
            <p>CGPA: {cgpa}</p>
            <p>Graduation Year: {year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
