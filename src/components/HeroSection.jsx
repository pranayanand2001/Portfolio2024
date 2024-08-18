import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-between px-8 lg:px-16">
      {/* Left Side */}
      <div className="max-w-3xl font-sans text-gray-800">
        <h1 className="font-montserrat text-5xl lg:text-7xl font-bold">
          Pranay Anand
        </h1>
        <h2 className="font-roboto text-lg mt-4 lg:text-3xl font-semibold">
          Software Developer Enthusiast
        </h2>
        <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
        Starting out in web development has been quite the challenge—like diving deeper into an endless sea. But that’s part of what makes it exciting. I’m passionate about creating beautiful websites and building web applications that really enhance the user experience. I’ve been learning and working with various modern web technologies, and I’m always ready to take on new challenges and see where this journey takes me.
        </p>
      </div>

      {/* Right Side - Social Media Links */}
      <div className="flex flex-col space-y-6">
        <a href="https://www.linkedin.com/in/pranayanand2001" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-800 w-12 h-12 hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://github.com/pranayanand2001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 w-12 h-12 hover:text-gray-600 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/hey.pranay" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-800 w-12 h-12 hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://discord.gg/XNdw5vVPy3" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-gray-800 w-12 h-12 hover:text-purple-600 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
