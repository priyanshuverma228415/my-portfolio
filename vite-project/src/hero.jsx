import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-black text-white pt-24"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Priyanshu Verma</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate Web Developer who builds amazing websites using MERN stack and React.js.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition font-semibold"
        >
          Hire Me
        </a>
      </div>

      {/* Image Section */}
      {/* <div className="flex-1 flex justify-center">
        <img
          src="https://via.placeholder.com/350x350.png?text=Your+Photo"
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
        />
      </div> */}
    </section>
  );
}