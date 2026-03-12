import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-6 border-t border-gray-800 items-center text-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Suraj
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Passionate Web Developer building modern, responsive and
            user-friendly websites using React, JavaScript and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Contact Me
          </h3>

          <p className="text-gray-400 mb-4">
            📧 itxsuraj@gmail.com <br />
            📞+9370944696
          </p>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com"
              className="bg-gray-900 p-3 rounded-full hover:bg-black hover:scale-110 transition"
            >
              🐱
            </a>

            <a
              href="https://linkedin.com"
              className="bg-gray-900 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition"
            >
              💼
            </a>

            <a
              href="https://instagram.com"
              className="bg-gray-900 p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition"
            >
              📸
            </a>

            <a
              href="mailto:surajdev@gmail.com"
              className="bg-gray-900 p-3 rounded-full hover:bg-red-500 hover:scale-110 transition"
            >
              ✉️
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 Suraj Vishwakarma | Web Developer
      </div>

    </footer>
  );
};

export default Footer;