import react from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about_me-container">
      <div className="about_me-text">
        <h1>Hello everyone, My name is Parva Thakkar. Nice to meet you!</h1>
        <p>
          I am a <span className="software">Software Engineer</span> who
          recently graudated from Toronto Metropoloitan University with a{" "}
          <span className="software">Computer Engineering</span> Degree
        </p>
        <p>
          My passions outside of the world of development and creation include:
        </p>
        <div className="hobbies">
          <ul>
            <li>Playing Soccer & Volleyball</li>
            <li>
              Exploring the world within cybersecurity through games and
              podcasts
            </li>
            <li>Watching Netflix/Anime</li>
            <li>Playing the mini games on New York Times</li>
          </ul>
        </div>
        <p className="last-text">
          I am always looking for new opportunities to learn and grow, so feel
          free to reach out!
        </p>
      </div>
      <div className="my-picture">
        <img src="public/beave.JPG" alt="My Picture" />
      </div>
    </div>
  );
}
