import React, { useRef } from "react";
import "./bubble.css";

export default function Bubble({ label, onClick }) {
  const bubbleRef = useRef(null);

  const handleClick = () => {
    const el = bubbleRef.current;
    el.classList.add("pop");
    setTimeout(() => {
      el.classList.remove("pop");
      onClick(label);
    }, 300);
  };

  return (
    <div ref={bubbleRef} className="bubble" onClick={handleClick}>
      <p style={{ color: "black", marginTop: "20px", fontWeight: "1000" }}>
        {label}
      </p>
    </div>
  );
}
