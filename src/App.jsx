import React, { useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Bubble from "./components/Bubble/Bubble";
import Title from "./components/Title/Title";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";
import Experience from "./pages/Experience/experience";
import Skills from "./pages/Skills/skills";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/resume";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

function Home() {
  const labels = [
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Contact",
    "Resume",
  ];

  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="title-container">
        <Title />
      </div>
      <div className="bubbles-container">
        {labels.map((label) => (
          <Bubble
            key={label}
            label={label}
            onClick={() => navigate(`/${label.toLowerCase()}`)}
          />
        ))}
      </div>
    </div>
  );
}
