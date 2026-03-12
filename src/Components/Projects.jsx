import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Personal portfolio website built with React and Tailwind CSS."
    },
    {
      title: "Todo App",
      img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      desc: "Task management app with add, delete, and update features."
    },
    {
      title: "Weather App",
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      desc: "Weather application using API integration."
    },
    {
      title: "E-commerce UI",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      desc: "Modern e-commerce frontend design."
    },
    {
      title: "Blog Website",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      desc: "Responsive blog layout with clean UI."
    },
    {
      title: "Landing Page",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      desc: "Modern business landing page design."
    },
    {
      title: "Login & Signup UI",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      desc: "Authentication UI with React forms."
    },
    {
      title: "Dashboard UI",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc: "Admin dashboard interface with charts."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">

      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >

            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
                View Project
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;