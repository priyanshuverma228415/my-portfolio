import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-md">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 px-4 py-3 rounded text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 px-4 py-3 rounded text-white focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-gray-800 px-4 py-3 rounded text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 mb-4">Or connect with me here 👇</p>
        <div className="flex justify-center gap-6 text-2xl">
          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-blue-500"
          >
            <i className="fas fa-envelope"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}