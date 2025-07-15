import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CustomizedTimeline from "./Timeline";
import Education from "./Education";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";

import "./About.css";

export default function Experience() {
  const [isView, setView] = useState(<CustomizedTimeline />);
  const [isSelected, setSelected] = useState("experience");
  const [slide, setSlide] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Slider functionality
  const handleSwitchView = (viewType) => {
    if (viewType === isSelected) return;

    setSlide(true); // Start slide-out animation
    setTimeout(() => {
      setSelected(viewType);
      setView(
        viewType === "experience" ? <CustomizedTimeline /> : <Education />
      );
      setSlide(false); // Start slide-in animation
    }, 300); // Matches animation duration
  };

  /* Handles Chip Click */
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  /* Download CV*/
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.download = "Nelani_Maluka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const icons = [
    {
      name: "React js",
      src: "/Images/Icons/react.png",
      desc: "JavaScript library",
    },
    { name: "Redux", src: "/Images/Icons/Redux.png", desc: "State manager" },
    {
      name: "Material UI",
      src: "/Images/Icons/mui.png",
      desc: "React UI library",
    },
    {
      name: "Spring Boot",
      src: "/Images/Icons/spring-boot.png",
      desc: "Java framework",
    },
    { name: "Git", src: "/Images/Icons/Git.png", desc: "Version control" },
    { name: "Mysql", src: "/Images/Icons/mysql.png", desc: "Relational DB" },
    {
      name: "MS Sql",
      src: "/Images/Icons/sql-server.png",
      desc: "Database system",
    },
    {
      name: "Firebase",
      src: "/Images/Icons/firebase.png",
      desc: "Backend-as-a-service",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin-1.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github-1.png",
      alt: "GitHub",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email-1.png",
      alt: "Email",
    },
  ];

  return (
    <div id="About">
      <div className="container">
        {/* About Section */}
        <div className="about-container">
          <div className="heading">
            <h1 className="e">About</h1>
            <hr />
          </div>
          <div className="heading-2">
            <p>
              Take a closer look at my journey, explore my experience, and gain
              deeper insight into my <span className="e">skills</span>,
              background, and {""}
              <span className="e">professional growth</span>.
            </p>
          </div>

          {/* Exprerince Section */}
          <div className="xp-container">
            <div className="xp-content">
              <div className="text-cont">
                <div className="profile">
                  <img src="Images/Nelani.jpg" alt="Profile image" />
                  <div>
                    <span className="q">
                      <LocationOnIcon
                        sx={{
                          height: {
                            xs: "13px",
                            sm: "16px",
                            md: "18px",
                            lg: "20px",
                          },
                        }}
                      />
                      Johannesburg
                    </span>
                  </div>
                </div>
                <div className="text">
                  <h4>About Me</h4>
                  <hr />
                  <p>
                    Motivated software developer skilled in Java, React, and
                    Spring Boot. Experienced in building APIs and creating
                    easy-to-use applications. Recently completed an NQF Level 6
                    qualification and worked as a frontend developer intern.
                    Enjoys solving problems and learning new skills.
                  </p>
                </div>
                <div className="socials">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank">
                      <img src={social.src} alt={social.alt} />
                    </a>
                  ))}
                </div>
                <div className="button-cont">
                  {" "}
                  <button onClick={handleDownload}>
                    Resume
                    <span>
                      <DownloadIcon
                        sx={{
                          height: {
                            xs: "17px",
                            sm: "18px",
                            md: "20px",
                            lg: "20px",
                          },
                          color: "black",
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="heading-2">
                  <h1>Professional Experience</h1>
                  <p>
                    Gain insight into my journey in software development, from
                    building <span className="e">secure applications</span> to
                    implementing <span className="e">scalable solutions</span>.
                  </p>
                </div>
                <div className="timeline">
                  <Stack direction="row" spacing={1}>
                    <Chip
                      className={`rotate-animation ${
                        isSelected === "experience"
                          ? "selected-chip"
                          : "unselected-chip"
                      }`}
                      icon={
                        <WorkIcon style={{ color: " rgb(211, 211, 211)" }} />
                      }
                      label="Experience"
                      variant={isSelected === "experience" ? "filled" : "none"}
                      onClick={() => handleSwitchView("experience")}
                    />
                    <Chip
                      className={`rotate-animation ${
                        isSelected === "education"
                          ? "selected-chip"
                          : "unselected-chip"
                      }`}
                      icon={
                        <SchoolIcon style={{ color: " rgb(211, 211, 211)" }} />
                      }
                      label="Education"
                      variant={isSelected === "education" ? "filled" : "none"}
                      onClick={() => handleSwitchView("education")}
                    />
                  </Stack>
                  <hr />
                  <div className={`view ${slide ? "slide-out" : "slide-in"}`}>
                    {isView}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <div className="heading-2">
              <h1>Current Technologies</h1>
              <p>
                Discover my expertise in software development, leveraging{" "}
                <span className="e">modern frameworks</span> and{" "}
                <span className="e">best practices</span> to build secure,
                scalable applications.
              </p>
            </div>
            <div className="skill-container">
              <div className="i">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="skill"
                    onMouseEnter={() => handleMouseEnter(icon.name)}
                  >
                    <span className="img">
                      <img
                        src={icon.src}
                        alt={`${icon.name} icon`}
                        className={`rotate ${
                          hoveredIcon === icon.name ? "rotating" : ""
                        }`}
                      />
                    </span>
                    <div className="skill-text">
                      <span className="text">{icon.name}</span>

                      <span className="text">{icon.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
