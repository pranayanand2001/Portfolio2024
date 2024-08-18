import React from "react";
import { FaJs, FaPython, FaCode, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiEjs, SiJquery } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs className="hover:text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="hover:text-blue-500" /> },
      { name: "C++", icon: <FaCode className="hover:text-blue-600" /> },
      { name: "HTML", icon: <FaHtml5 className="hover:text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="hover:text-blue-600" /> },
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "React.js", icon: <FaReact className="hover:text-blue-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="hover:text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="hover:text-teal-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="hover:text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="hover:text-gray-700" /> },
      { name: "EJS", icon: <SiEjs className="hover:text-yellow-500" /> },
      { name: "jQuery", icon: <SiJquery className="hover:text-blue-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <FaDatabase className="hover:text-blue-600" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center space-x-4">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center mb-4">
                    <div className="text-5xl mb-2 text-[#D0B8A8] hover:text-violet-light transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-lg font-medium text-[#C5705D]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
