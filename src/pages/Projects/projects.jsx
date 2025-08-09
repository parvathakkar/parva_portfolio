import react from "react";
import "./projects.css";
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
        "http://www.last100.com/wp-content/uploads/2007/12/composite-logos-2.jpg",
    },
    {
      id: 2,
      title: "Hotel/Restaraunt Finder",
      description: "Find open restaraunts and hotels near you",
      imageUrl:
        "https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg?resize=1200,800",
    },
    {
      id: 3,
      title: "Therapist and Patient Engagement Detector",
      description:
        "Provides visual and quantitative feedback to therapists on how engaged their patients are during sessions",
      imageUrl:
        "https://www.health.com/thmb/GlslebWLT9DwbeA_QCL1gh3aqkE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cbt-GettyImages-1368430888-4f6382a186b046ebbc030765d28a86c4.jpg",
    },
  ];

  return (
    <div className="project-container">
      <div className="project-page-title">
        <h1>Here's some things that I have worked on!</h1>
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
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
