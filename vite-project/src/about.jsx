import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        About <span className="text-blue-500">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-lg text-gray-300 space-y-4">
          <p>
            I am a passionate and dedicated full stack developer with a strong
            foundation in MERN Stack and front-end technologies like React,
            Tailwind CSS, and more.
          </p>
          <p>
            I love building clean and scalable websites and am always excited
            to learn new things and improve my skills.
          </p>
          <p>
            Currently pursuing B.Tech in Computer Science, I have hands-on
            experience working on real-world projects and internships.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Frontend
            </h3>
            <p className="text-gray-300 text-sm">
              React.js, Tailwind CSS, JavaScript, HTML, CSS
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Backend
            </h3>
            <p className="text-gray-300 text-sm">
              Node.js, Express.js, MongoDB
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Tools
            </h3>
            <p className="text-gray-300 text-sm">
              GitHub, VS Code, Postman, Netlify
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Soft Skills
            </h3>
            <p className="text-gray-300 text-sm">
              Communication, Teamwork, Problem Solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}