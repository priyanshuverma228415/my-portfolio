// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          I'm actively looking for opportunities. Feel free to reach out!
        </p>
        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;