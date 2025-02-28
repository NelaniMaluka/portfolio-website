import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ImageCarousel from "./ImageCarousel";

import "./Projects.css";

export default function Projects() {
  const [showCard, setShowCard] = useState(null); // Updated to track the index of the project being displayed

  const projects = [
    {
      name: "Kick Land",
      imgUrls: [
        "/Images/project-images/Kick-Land/Kick-Land-img.png",
        "/Images/project-images/Kick-Land/Kick-Land-img1.png",
        "/Images/project-images/Kick-Land/Kick-Land-img2.png",
        "/Images/project-images/Kick-Land/Kick-Land-img3.png",
        "/Images/project-images/Kick-Land/Kick-Land-img4.png",
        "/Images/project-images/Kick-Land/Kick-Land-img5.png",
        "/Images/project-images/Kick-Land/Kick-Land-img6.png",
        "/Images/project-images/Kick-Land/Kick-Land-img7.png",
      ],
      tools: [
        "ReactJS",
        "Redux",
        "Spring Boot",
        "MySQL",
        "JWT",
        "JUnit",
        "SMTP",
        "Stripe",
      ],
      about:
        "Kick Land is a full-stack web application that provides a platform for selling sneakers. It is built using React.js for the frontend and Java with Spring Boot for the backend. The application includes features such as user authentication, product browsing, shopping cart management, order management, profile management and state management.",
      //liveUrl: "",
      githubUrl: "https://github.com/NelaniMaluka/kick-land",
    },
    {
      name: "Learnhall",
      imgUrls: [
        "/Images/project-images/Learnhall/Learnhall-img.png",
        "/Images/project-images/Learnhall/Learnhall-img1.png",
        "/Images/project-images/Learnhall/Learnhall-img2.png",
        "/Images/project-images/Learnhall/Learnhall-img3.png",
        "/Images/project-images/Learnhall/Learnhall-img4.png",
      ],
      tools: ["HTML", "CSS", "JavaScript", "Vue.js"],
      about:
        "Learnhall is an online platform that connects students with tutors. It collects user data, such as course preferences and tutor information, and sends it directly to the company’s email for processing. The platform aims to streamline the connection process between students and tutors, ensuring a smooth and efficient experience.",
      liveUrl: "https://learnhall.com/",
      githubUrl: "https://github.com/NelaniMaluka/learnhall-1",
    },
  ];

  // Function to close modal when clicking outside the card
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setShowCard(null); // Close the modal by setting it to null
    }
  };

  // Function to close modal on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showCard !== null) {
        setShowCard(null); // Close modal on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCard]);

  return (
    <div
      id="Projects"
      className={showCard !== null ? "blurred-background" : ""}
    >
      <div className="container">
        <div className="projects-container">
          <h1>My Work</h1>
          <p className="sub-text">
            Discover the projects I’ve worked on, where I apply my skills in
            software development to build innovative and efficient solutions.
          </p>
          <div className="project">
            {/* Image Container */}
            {projects.map((project, index) => (
              <div key={index} className="image-container">
                {Array.isArray(project.imgUrls) &&
                project.imgUrls.length > 0 ? (
                  <img src={project.imgUrls[0]} alt="Project Image" />
                ) : null}
                <button
                  className="learn-more"
                  onClick={() => setShowCard(index)}
                >
                  Learn More
                </button>
              </div>
            ))}

            {/* Card - Shows only when showCard is not null */}
            {showCard !== null && (
              <div className="modal" onClick={handleOutsideClick}>
                <div className="modal-content">
                  <Card sx={{ maxWidth: 600 }}>
                    <CardMedia sx={{ height: 270 }} title="Project Image">
                      {projects[showCard] && (
                        <ImageCarousel project={projects[showCard]} />
                      )}
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ margin: "5px" }}
                      >
                        {projects[showCard].name}
                      </Typography>
                      {projects[showCard].tools.map((tool, index) => (
                        <Chip
                          key={index}
                          label={tool}
                          variant="filled"
                          sx={{ margin: "5px" }}
                        />
                      ))}
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", margin: "5px" }}
                      >
                        {projects[showCard].about}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {projects[showCard].liveUrl ? (
                        <a
                          href={projects[showCard].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="small" sx={{ color: "black" }}>
                            Live Site
                          </Button>
                        </a>
                      ) : (
                        ""
                      )}
                      <a
                        href={projects[showCard].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="github-icon"
                          src="/Images/Icons/github.png"
                          alt="GitHub"
                        />
                      </a>
                    </CardActions>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
