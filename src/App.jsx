import React from "react";
import Bubble from "./components/Bubble/bubble.jsx";
import "./index.css";

function App() {
  const labels = ["About Me", "Projects", "Experience", "Skills", "Contact"];
  const handleBubbleClick = (section) => {
    console.log("Navigate to:", section);
  };

  return (
    <div
      className="app-container"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div className="ripple-overlay" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {labels.map((l) => (
          <Bubble key={l} label={l} onClick={handleBubbleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
