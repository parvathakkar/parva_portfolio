import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./about.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about_me-container">
      <div className="about_me-text">
        <h1>Hello, My Name Is Parva Thakkar. Nice To Meet You!</h1>
        <p>
          I am a <span className="software">Software Engineer</span> who
          recently graudated from Toronto Metropolitan University with a{" "}
          <span className="software">Computer Engineering</span> Degree
        </p>
        <p>
          My passions outside of the world of development and creation include:
        </p>
        <div className="hobbies">
          <ul>
            <li>Playing Soccer & Volleyball</li>
            <li>
              Exploring the world of cybersecurity through games and podcasts
            </li>
            <li>Watching Netflix/Anime</li>
            <li>Playing the mini games on New York Times</li>
          </ul>
        </div>
        <p className="last-text">
          I am always looking for new opportunities to learn and grow, so feel
          free to reach out!
        </p>
        <div className="contact-info">
          <p>
            <span className="software">Email</span>: thakkarparva@outlook.com
          </p>
          <p>
            <span className="software">Phone Number</span>: 647-767-4800
          </p>
        </div>
        <div className="button" onClick={() => navigate(`/`)}>
          <Button variant="contained" endIcon={<HomeIcon />}>
            Back Home
          </Button>
        </div>
      </div>
      <div className="my-picture">
        <img src="/beave.JPG" alt="My Picture" />
      </div>
    </div>
  );
}
