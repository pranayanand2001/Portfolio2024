import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import '../styles/Header.css';
import BackToTopButton from "./BackToTopButton";

function App() {
  return (
    
    <div className="App bg-[#F8EDE3] min-h-screen">
      <Header />
      <HeroSection/>
      <Projects />
      <SkillsSection />
      <ContactSection />
      <BackToTopButton />
    </div>
  );
}

export default App;
