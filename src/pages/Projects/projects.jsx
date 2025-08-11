import react from "react";
import "./projects.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sportsbook Assistant",
      description:
        "Assistant to help you find the best odds across multiple sportsbooks",
      imageUrl:
        "https://cdn.prod.website-files.com/64de31713f61e6b251fc08ae/650070a8f55b545bd61b0455_Sportsbooks.png",
      status: "Completed",
    },
    {
      id: 2,
      title: "Hotel/Restaraunt Finder",
      description: "Find open restaraunts and hotels near you",
      imageUrl:
        "https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg?resize=1200,800",
      status: "Completed",
    },
    {
      id: 3,
      title: "Therapist and Patient Engagement Detector",
      description:
        "Provides visual and quantitative feedback to therapists on how engaged their patients are during sessions",
      imageUrl:
        "https://www.health.com/thmb/GlslebWLT9DwbeA_QCL1gh3aqkE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cbt-GettyImages-1368430888-4f6382a186b046ebbc030765d28a86c4.jpg",
      status: "Completed",
    },
    {
      id: 4,
      title: "Book Store Inventory System",
      description: "A system to manage book inventory for a bookstore",
      imageUrl:
        "https://image.freepik.com/free-photo/stack-books-library_42493-283.jpg",
      status: "Completed",
    },
    {
      id: 5,
      title: "Card Counter Catcher",
      description:
        "A computer vision project to detect card counters in a casino",
      imageUrl:
        "https://www.crownperth.com.au/getmedia/7171081e-e6fd-487a-adfc-1ade1f75edee/220815-Crown-Perth-Gaming-Blackjack-1200x800px-6.jpg",
      status: "In Progress",
    },
    {
      id: 6,
      title: "Springboot Banking System",
      description: "A banking system built with Spring Boot",
      imageUrl:
        "https://dashboard.thefinanser.com/wp-content/uploads/2021/09/bank.jpeg",
      status: "In Progress",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="project-container">
      <div className="project-page-title">
        <h1>Here are some things that I have worked on!</h1>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
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
                  sx={{ color: "text.info", fontWeight: 800, marginTop: 2 }}
                >
                  {project.status}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="button" onClick={() => navigate(`/`)}>
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
}
