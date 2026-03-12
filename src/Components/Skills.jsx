import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Responsive Design", icon: "📱" },
    { name: "API Integration", icon: "🔗" },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6 ">

      <div className="max-w-7xl mx-auto ">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-14">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900  border-gray-800 p-8 rounded-2xl text-center
              shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-105
              transition duration-300 cursor-pointer border-2"
            >
              
              <div className="text-4xl mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-200">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;