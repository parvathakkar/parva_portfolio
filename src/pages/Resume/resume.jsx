import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./resume.css";

const Resume = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="resume-container">
      <header className="resume-title">
        <h1>You Can View My Resume Below!</h1>
      </header>

      <div className="actual-resume">
        <iframe
          src="/Parva_Thakkar_Resume.pdf"
          title="Parva Thakkar Resume"
          width="100%"
          height="980px"
          style={{
            border: "none",
            maxWidth: "750px",
            margin: "0 auto",
            display: "block",
          }}
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a
              href="/Parva_Thakkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the PDF instead
            </a>
          </p>
        </iframe>
      </div>
      <div className="button-container">
        <Button
          className="button"
          variant="contained"
          endIcon={<HomeIcon />}
          onClick={handleBackHome}
          aria-label="Navigate back to home page"
        >
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Resume;
