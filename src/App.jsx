import { Routes, Route, useNavigate } from "react-router-dom";

import Bubble from "./components/Bubble/bubble";
import Title from "./components/Title/title";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";
import Experience from "./pages/Experience/experience";
import Skills from "./pages/Skills/skills";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

const Home = () => {
  const labels = ["About", "Projects", "Experience", "Skills"];

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
      <Analytics />
    </div>
  );
};

export default App;
