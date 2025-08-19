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
    },
    {
      id: 2,
      title: "Hotel/Restaurant Finder",
      description: "Find open restaurants and hotels near you",
      src: "/res.jpg",
      status: "Completed",
    },
    {
      id: 3,
      title: "Therapist and Patient Engagement Detector",
      description:
        "Provides visual and quantitative feedback to therapists on how engaged their patients are during sessions",
      src: "https://www.health.com/thmb/GlslebWLT9DwbeA_QCL1gh3aqkE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cbt-GettyImages-1368430888-4f6382a186b046ebbc030765d28a86c4.jpg",
      status: "Completed",
    },
    {
      id: 4,
      title: "Book Store Inventory System",
      description: "A system to manage book inventory for a bookstore",
      src: "/books.jpeg",
      status: "Completed",
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
          </Card>
        ))}
      </div>

      <div className="button" onClick={() => handleBackHome()}>
        <Button
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
