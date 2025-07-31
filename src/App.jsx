import React from "react";
import Bubble from "./components/Bubble/bubble.jsx";
import Title from "./components/Title/title.jsx";
import "./index.css";

function App() {
  const labels = [
    "About Me",
    "Projects",
    "Experience",
    "Skills",
    "Contact",
    "Resume",
  ];
  const handleBubbleClick = (section) => {
    console.log("Navigate to:", section);
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <Title />
      </div>
      <div className="bubbles-container">
        {labels.map((l) => (
          <Bubble key={l} label={l} onClick={handleBubbleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
