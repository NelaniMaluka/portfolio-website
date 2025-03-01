import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CustomizedTimeline from "./Timeline";
import Education from "./Education";

import "./Experience.css";

export default function Experience() {
  const [isView, setView] = useState(<CustomizedTimeline />);
  const [isSelected, setSelected] = useState("experience");
  const [slide, setSlide] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const icons = [
    {
      name: "React js",
      src: "/Images/Icons/react.png",
      desc: "JavaScript library",
    },
    { name: "Redux", src: "/Images/Icons/Redux.png", desc: "State manager" },
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
      desc: "Backend platform",
    },
  ];

  return (
    <div id="Experience" className="xp-container">
      <div className="container">
        <div className="heading">
          <h1>Professional Experience</h1>
          <p className="sub-heading">
            Gain insight into my journey in software development, from building
            secure applications to implementing scalable solutions.
          </p>
        </div>
        <div className="xp-content">
          <div className="timeline-wrapper">
            <Stack direction="row" spacing={1}>
              <Chip
                icon={<WorkIcon />}
                label="Experience"
                variant={isSelected === "experience" ? "filled" : "outlined"}
                onClick={() => handleSwitchView("experience")}
              />
              <Chip
                icon={<SchoolIcon />}
                label="More About Me"
                variant={isSelected === "education" ? "filled" : "outlined"}
                onClick={() => handleSwitchView("education")}
              />
            </Stack>
            <div className={`view ${slide ? "slide-out" : "slide-in"}`}>
              {isView}
            </div>
          </div>
          <div className="skills">
            <div className="heading">
              <h1>Current Technologies</h1>
              <p className="sub-heading">
                Discover my expertise in software development, leveraging modern
                frameworks and best practices to build secure, scalable
                applications.
              </p>
            </div>
            {icons.map((icon, index) => (
              <div key={index} className="skill">
                <span className="img">
                  <img
                    src={icon.src}
                    alt={`${icon.name} icon`}
                    className={`rotate ${
                      hoveredIcon === icon.name ? "rotating" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(icon.name)}
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
  );
}
