import React from "react";

export default function Skills() {
  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript"],
    "Frontend": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
    ],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["MongoDB", "Firebase"],
    "Tools & Platform": ["GitHub", "Netlify", "VS Code", "Postman"],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}