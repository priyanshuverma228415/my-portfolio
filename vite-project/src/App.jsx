import React from "react";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          Priyanshu <span className="text-pink-500">Verma</span>
        </h1>
        <ul className="flex gap-6 text-sm">
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
        {/* <div className="flex gap-4 items-center">
          <a href="#"><img src="github-icon.svg" alt="GitHub" /></a>
          <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn" /></a>
        </div> */}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-12">
        <div>
          <h2 className="text-pink-500 uppercase">Hello 👋</h2>
          <h1 className="text-4xl font-bold mt-2">I'm Priyanshu Verma</h1>
          <h3 className="text-pink-400 text-xl mt-1">UI/UX</h3>
          <p className="text-gray-400 mt-4 max-w-xl">
            I am a passionate and dedicated Computer Science student with a strong
            foundation in programming, full-stack development, DSA and
            problem-solving. My goal is to leverage my technical skills to build impactful and user-centric
            software solutions.
          </p>
        </div>
        {/* <img src="/sachin.png" alt="Sachin" className="rounded-full border-4 border-pink-500 w-52 h-52 mt-8 md:mt-0" /> */}
      </section>

      {/* Projects */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">My Projects 🚀</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-pink-400 font-semibold">Personal Portfolio</h3>
            <p className="text-sm text-gray-400 mt-2">
              A personal portfolio website showcasing technical skills, built using React.js with animations, GitHub & LeetCode integration.
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              <span className="bg-gray-700 px-2 py-1 rounded">React</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Bootstrap</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript (ES6+)</span>
            </div>
            <a href="#" className="inline-block mt-3 text-pink-500">Live Demo</a>
          </div>
          {/* Repeat for other projects... */}
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">My Skills 🛠️</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Programming Language</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">JavaScript</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-pill">HTML5</span>
              <span className="skill-pill">CSS3</span>
              <span className="skill-pill">JavaScript (ES6+)</span>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Redux</span>
              <span className="skill-pill">Bootstrap</span>
              <span className="skill-pill">Tailwind CSS</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">Education 🎓</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-pink-400">Bachelor of Technology in CSE</h3>
            <p className="text-sm text-gray-400">R.R Institute of Modern Technology Lucknow (AKTU)</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-pink-400">High School</h3>
            <p className="text-sm text-gray-400">mordem inter collage (U.P. Board)</p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Get in Touch 📩</h2>
        <p className="text-gray-400 mb-6">Have a project or just want to say hello? 👋</p>
        <form className="flex flex-col gap-4 max-w-lg">
          <input className="bg-gray-800 text-white px-4 py-2 rounded" placeholder="Name" />
          <input className="bg-gray-800 text-white px-4 py-2 rounded" placeholder="Email" />
          <textarea className="bg-gray-800 text-white px-4 py-2 rounded" placeholder="Message"></textarea>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
        <div className="mt-10 p-4 border border-gray-600 rounded-lg">
          <p className="text-center">Find me on:</p>
          <div className="flex justify-center gap-4 mt-2">
            <img src="icon1.svg" alt="" />
            <img src="icon2.svg" alt="" />
            <img src="icon3.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 Sachin Yadav. <a className="text-pink-500" href="#">GitHub</a> | <a className="text-pink-500" href="#">LinkedIn</a>
      </footer> */}
    </div>
  );
}

// Tailwind custom class (add in global CSS or use directly as inline styles)
// .skill-pill => bg-gray-800 px-2 py-1 rounded text-sm