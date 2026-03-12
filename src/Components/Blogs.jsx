import React from "react";

const Blogs = () => {
  const blogs = [
    {
      title: "Tools I Use",
      text: "VS Code, GitHub, Chrome DevTools and modern developer tools to build fast, optimized and scalable web applications.",
      icon: "🛠️",
    },
    {
      title: "Currently Learning",
      text: "Deepening my knowledge in advanced React concepts, APIs, performance optimization and modern frontend architecture.",
      icon: "📚",
    },
    {
      title: "Web Development",
      text: "Building responsive websites with React, JavaScript, HTML, CSS and Tailwind to create modern user interfaces.",
      icon: "💻",
    },
    {
      title: "UI/UX Focus",
      text: "Creating clean, responsive and user-friendly designs that deliver great user experiences across all devices.",
      icon: "🎨",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Developer Insights
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">{blog.icon}</div>

              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.text}
              </p>

              <button className="mt-5 text-blue-400 hover:text-white transition">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Blogs;