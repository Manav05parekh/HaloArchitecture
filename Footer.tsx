import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6 md:py-8 lg:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-6 p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          {darkMode ? <FaSun className="text-yellow-500" size={20} /> : <FaMoon className="text-gray-900" size={20} />}
        </button>

        {/* Logo & Description */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Halo Architecture
          </h2>
          <p className="text-sm mt-2">
            Innovating for a better tomorrow.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
