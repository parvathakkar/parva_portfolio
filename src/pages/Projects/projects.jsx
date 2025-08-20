import React from "react";
import "./projects.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sportsbook Assistant",
      description:
        "Assistant to help you find the best odds across multiple sportsbooks",
      src: "/bet.png",
      status: "Completed",
      link: "https://github.com/parvathakkar/sportsbook_assistant",
    },
    {
      id: 2,
      title: "Hotel/Restaurant Finder",
      description: "Find open restaurants and hotels near you",
      src: "/res.jpg",
      status: "Completed",
      link: "https://github.com/parvathakkar/Hotel-Restaraunt_Finder",
    },
    {
      id: 3,
      title: "Therapist and Patient Engagement Detector",
      description:
        "Provides visual and quantitative feedback to therapists on how engaged their patients are during sessions",
      src: "/therapy.jpg",
      status: "Completed",
      link: "https://drive.google.com/file/d/1mmlqIMStPqX0_TjTg6SwkkxJ1J23-6_9/view?usp=sharing",
    },
    {
      id: 4,
      title: "Book Store Inventory System",
      description: "A system to manage book inventory for a bookstore",
      src: "/books.jpeg",
      status: "Completed",
      link: "https://github.com/parvathakkar/book_store_application",
    },
    {
      id: 5,
      title: "Card Counter Catcher",
      description:
        "A computer vision project to detect card counters in a casino",
      src: "/cards.jpg",
      status: "In Progress",
    },
    {
      id: 6,
      title: "Spring Boot Banking System",
      description: "A banking system built with Spring Boot",
      src: "/bank.jpeg",
      status: "In Progress",
    },
  ];

  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="project-container">
      <div className="project-page-title">
        <h1>These Are Some Projects That I Have Worked On!</h1>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345 }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.src}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 800,
                      marginTop: 2,
                      color: "black",
                    }}
                  >
                    {project.status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        ))}
      </div>

      <div className="button" onClick={() => handleBackHome()}>
        <Button
          className="buttonn"
          variant="contained"
          endIcon={<HomeIcon />}
          sx={{ marginTop: 10 }}
        >
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Projects;
