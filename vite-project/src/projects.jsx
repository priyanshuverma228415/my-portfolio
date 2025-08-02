import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built using React.js and Tailwind CSS with smooth scrolling, animated sections, and responsive design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://your-portfolio-link.com",
    },
    {
      title: "Weather App",
      description:
        "A weather forecast app using OpenWeatherMap API to fetch live data, built with HTML, CSS, JS and responsive layout.",
      tech: ["JavaScript", "API", "HTML/CSS"],
      link: "https://weather-app-link.com",
    },
    {
      title: "ToDo App",
      description:
        "A simple ToDo list application with add/delete/edit tasks, built with React.js and local storage handling.",
      tech: ["React", "LocalStorage", "CSS"],
      link: "https://todo-app-link.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-blue-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}