import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./resume.css";

export default function Resume() {
  const navigate = useNavigate();
  return (
    <div className="resume-container">
      <div className="resume-title">
        <h1>You Can View My Resume Below!</h1>
      </div>
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
          <p>Your browser does not support PDFs.</p>
        </iframe>
      </div>
      <div className="button" onClick={() => navigate(`/`)}>
        <Button variant="contained" endIcon={<HomeIcon />}>
          Back Home
        </Button>
      </div>
    </div>
  );
}
