// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-50 h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          Hi, I'm Yanshu
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A Passionate Frontend Developer 💻 | React & Tailwind Enthusiast 🚀
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;