import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./skills.css";

const Fronticons = [
  { src: "/icons/react.png", alt: "react" },
  { src: "/icons/html.png", alt: "html" },
  { src: "/icons/css.png", alt: "css" },
  { src: "/icons/angular.png", alt: "angular" },
  { src: "/icons/next.png", alt: "next" },
  { src: "/icons/js.png", alt: "javascript" },
];

const Backicons = [
  { src: "/icons/node.png", alt: "node" },
  { src: "/icons/java.png", alt: "java" },
  { src: "/icons/spring.png", alt: "springboot" },
  { src: "/icons/python.png", alt: "python" },
  { src: "/icons/sql.png", alt: "sql" },
  { src: "/icons/mongo.png", alt: "mongodb" },
];

const Devtools = [
  { src: "/icons/git.png", alt: "git" },
  { src: "/icons/kub.png", alt: "kubernetes" },
  { src: "/icons/docker.png", alt: "docker" },
  { src: "/icons/aws.png", alt: "aws" },
  { src: "/icons/Jenkins.png", alt: "jenkins" },
];

const Aitools = [
  { src: "/icons/gpt.png", alt: "chatGPT" },
  { src: "/icons/anth.png", alt: "Claude" },
  { src: "/icons/cop.png", alt: "copilot" },
  { src: "/icons/deepseek.png", alt: "deepseek" },
  { src: "/icons/tensor.png", alt: "tensorflow" },
  { src: "/icons/torch.png", alt: "pytorch" },
];

const Skills = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h1>These Are The Technologies I Am Familiar With</h1>
      </div>

      <div className="frontend-container">
        <h1>Frontend</h1>
        <div className="front-icons-container">
          {Fronticons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="icons"
            />
          ))}
        </div>
      </div>

      <div className="backend-container">
        <h1>Backend</h1>
        <div className="back-icons-container">
          {Backicons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="icons"
            />
          ))}
        </div>
      </div>

      <div className="devtools-container">
        <h1>Developer Tools</h1>
        <div className="devtools-icons-container">
          {Devtools.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="icons"
            />
          ))}
        </div>
      </div>

      <div className="aitools-container">
        <h1>AI/ML Tools</h1>
        <div className="front-icons-container">
          {Aitools.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="icons"
            />
          ))}
        </div>
      </div>

      <div className="button" onClick={() => handleBackHome()}>
        <Button variant="contained" endIcon={<HomeIcon />}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Skills;
