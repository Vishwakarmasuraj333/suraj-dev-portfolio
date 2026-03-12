import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/3d-cartoon-software-developer-generative-ai_644690-101538.jpg"
            alt="About"
            className="w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am a passionate Web Developer who loves building modern,
            responsive websites and web applications. I work with
            React, JavaScript, HTML, CSS, and Tailwind CSS to create
            fast, clean, and user-friendly interfaces. My goal is to
            build websites that look great and provide a smooth user
            experience across all devices.
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 hover:scale-105 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg">
            Read More
          </button>

          {/* Social Links */}
          <div className="mt-10">

            <h3 className="text-xl font-semibold text-blue-400 mb-6">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-start gap-6">

              <a
                href="https://github.com"
                target="_blank"
                className="bg-gray-800 p-4 rounded-full text-2xl hover:bg-black hover:scale-125 hover:shadow-xl transition duration-300"
              >
                🐱
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="bg-gray-800 p-4 rounded-full text-2xl hover:bg-blue-600 hover:scale-125 hover:shadow-xl transition duration-300"
              >
                💼
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-800 p-4 rounded-full text-2xl hover:bg-pink-500 hover:scale-125 hover:shadow-xl transition duration-300"
              >
                📸
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="bg-gray-800 p-4 rounded-full text-2xl hover:bg-sky-500 hover:scale-125 hover:shadow-xl transition duration-300"
              >
                🐦
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;