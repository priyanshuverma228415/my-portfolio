// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React.js and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Skin Disease Classifier",
    description:
      "An AI/ML-based project that predicts skin diseases using image classification.",
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application using OpenWeatherMap API and React.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;