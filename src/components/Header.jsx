import React, { useState } from "react";
import "../styles/Header.css"; 

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#C5705D] bg-opacity-80 backdrop-blur-none z-50 hover:backdrop-blur-sm	">
      <div className="container mx-auto py-4 flex justify-center items-center space-x-8 text-center">
        <a href="#projects" className="font-serif hover:font-mono text-xl hover:text-blue-600">
          Projects
        </a>
        <a href="#skills" className="font-serif hover:font-mono text-xl hover:text-blue-600">
          Skills
        </a>

        <div
          className="text-4xl font-semibold breathing-animation relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="custom-brackets inline-block transition-transform duration-300">
            &lt;
          </span>
          {hovered && (
            <span className="mx-2 transition-opacity duration-300">
              Welcome to my Portfolio
            </span>
          )}
          <span className="custom-brackets inline-block transition-transform duration-300">
            &gt;
          </span>
        </div>

        <a href="https://www.canva.com/design/DAGAmE8jy1M/b50-yzxFZq-wfwGd6gVeWg/view?utm_content=DAGAmE8jy1M&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        target="_blank"
        rel="noopener noreferrer"
         className="font-serif hover:font-mono text-xl hover:text-blue-600">
          Resume
        </a>
        <a href="#contact" className="font-serif hover:font-mono text-xl hover:text-blue-600">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Hero;
