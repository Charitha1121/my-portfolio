import React from "react";

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
    description: "A program that solves Sudoku puzzles efficiently.",
  },
  {
    title: "E-commerce Shopping Website",
    technologies: "SQL, PHP, HTML, CSS",
    description: "Developed a fully functional e-commerce website with shopping cart and payment gateway.",
  },
  {
    title: "Currency Converter",
    technologies: "Java",
    description: "A desktop application to convert currencies in real-time.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white rounded-3xl shadow-lg p-8 animate-fadeInUp animation-delay-600"
    >
      <h2 className="text-3xl font-bold text-primary1 mb-6 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map(({ title, technologies, description }) => (
          <div
            key={title}
            className="border-l-4 border-primary2 pl-6 hover:shadow-lg transition-shadow rounded-md p-4"
          >
            <h3 className="text-xl font-semibold text-primary2">{title}</h3>
            <p className="text-sm italic mb-2">{technologies}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
