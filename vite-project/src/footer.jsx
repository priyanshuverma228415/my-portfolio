import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-20">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-semibold">Priyanshu Verma</span>. All
        rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2 text-lg">
        {/* <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          LinkedIn
        </a> */}
      </div>
    </footer>
  );
}