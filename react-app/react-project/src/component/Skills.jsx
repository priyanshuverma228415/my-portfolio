// src/components/Skills.jsx
import React from "react";

const skills = [
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3 / Tailwind CSS", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Intermediate" },
  { name: "React.js", level: "Intermediate" },
  { name: "Next.js", level: "Basic" },
  { name: "Node.js & Express.js", level: "Basic" },
  { name: "MongoDB", level: "Basic" },
  { name: "Bootstrap", level: "Intermediate" },
  { name: "Java (DSA + OOP)", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section className="py-20 bg-blue-50 px-4" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;