import React, { useRef } from "react";
import "./Bubble.css";

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
      {label}
    </div>
  );
}
