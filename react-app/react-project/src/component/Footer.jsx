// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Priyanshu Verma. All rights reserved.
      </p>
    </footer>
  );
};