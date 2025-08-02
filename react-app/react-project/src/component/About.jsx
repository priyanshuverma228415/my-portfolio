// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm a Computer Science student (AI & ML) with a strong interest in
          Frontend Development. I love building interactive, responsive, and
          clean web interfaces using React.js, Tailwind CSS, and modern
          frameworks. I aim to become a high-impact frontend engineer with a
          passion for user-centric design and seamless performance.
        </p>
      </div>
    </section>
  );
};

export default About;