import React from "react";

const Journey = () => {
  const journey = [
    {
      year: "2023",
      title: "Started Web Development",
      text: "Began learning HTML and CSS, understanding the basics of how websites are built and structured."
    },
    {
      year: "2024",
      title: "JavaScript & Responsive Design",
      text: "Learned JavaScript fundamentals and built responsive websites using modern CSS techniques."
    },
    {
      year: "2025",
      title: "React Development",
      text: "Started building dynamic web applications using React and component-based architecture."
    },
    {
      year: "2026",
      title: "Modern Frontend Developer",
      text: "Building modern, fast and responsive web apps using React, Tailwind CSS and API integration."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6 justify-items-center items-center">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
          My Journey
        </h2>

        <div className="relative border-l-2 border-blue-500">

          {journey.map((item, index) => (
            <div key={index} className="mb-10 ml-6">

              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></span>

              <h3 className="text-xl font-semibold text-blue-400">
                {item.year} — {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Journey;