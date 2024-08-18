import React from "react";
import KeeperImage from "../assets/keeper.png";
import ToDoList from "../assets/todolist.png";
import SimonGame from "../assets/simon.png";

const projects = [
  {
    name: "Keeper",
    image: KeeperImage,
    demoLink: "https://pranayanand2001.github.io/Keeper/",
  },
  {
    name: "ToDoList",
    image: ToDoList,
    demoLink: "https://pranayanand2001.github.io/ToDoList/",
  },
  {
    name: "Simon Game",
    image: SimonGame,
    demoLink: "https://pranayanand2001.github.io/Simon_Game/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="flex space-x-8 overflow-x-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-72 h-72 flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-2/3 object-cover rounded-lg shadow-lg"
              />
              <div className="p-4">
                <h3 className="text-center mt-4 text-xl font-bold text-[#C5705D]">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
