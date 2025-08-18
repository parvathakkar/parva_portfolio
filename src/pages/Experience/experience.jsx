import React from "react";
import "./experience.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="exp-container">
      <h1>My Experience</h1>
      <div className="work-container">
        <div className="work-title">
          <img src="/ec.png" alt="Canada Flag" className="canada-img" />
          <p>Software Developer</p>
          <p>Environment And Climate Change Canada</p>
          <p>May 2023 - August 2024</p>
        </div>
        <div className="work-duties">
          <ul>
            <li>
              Contributed to the planning, design, and implementation of Java
              components that improved weather forecasting accuracy, optimized
              metadata services, and significantly reduced data processing
              times.
            </li>
            <li>
              Led testing efforts using Docker, automated API testing with
              Python scripts, and created test cases to identify and fix
              critical bugs, ensuring high product quality and stability.
            </li>
            <li>
              Engineered and maintained Jenkins CI/CD pipelines to automate
              build, test, and deployment workflows.
            </li>
            <li>
              Collaborated in Agile SDLC processes to streamline development and
              reduce delivery times.
            </li>
          </ul>
        </div>
      </div>
      <div className="button" onClick={() => navigate(`/`)}>
        <Button variant="contained" endIcon={<HomeIcon />}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Experience;
