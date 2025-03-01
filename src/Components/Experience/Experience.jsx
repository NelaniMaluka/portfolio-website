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
    { name: "React js", src: "/Images/Icons/react.png" },
    { name: "Redux", src: "/Images/Icons/Redux.png" },
    { name: "Spring Boot", src: "/Images/Icons/spring-boot.png" },
    { name: "Java", src: "/Images/Icons/java.png" },
    { name: "Jquery", src: "/Images/Icons/jquery.png" },
    { name: "JavaScript", src: "/Images/Icons/js.png" },
    { name: "CSS", src: "/Images/Icons/css-3.png" },
    { name: "Git", src: "/Images/Icons/Git.png" },
    { name: "Junit", src: "/Images/Icons/Junit.png" },
    { name: "Mysql", src: "/Images/Icons/mysql.png" },
    { name: "MS Sql", src: "/Images/Icons/sql-server.png" },
    { name: "Firebase", src: "/Images/Icons/firebase.png" },
  ];

  return (
    <div id="Experience" className="xp-container">
      <div className="container">
        <div className="heading">
          <h1>Experience and Skills</h1>
          <p className="sub-heading">
            Explore my skills and experience in software development. See how I
            build secure, scalable applications.
          </p>
        </div>
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
        <div className="xp-content">
          <div
            className={`timeline-wrapper ${slide ? "slide-out" : "slide-in"}`}
          >
            {isView}
          </div>
          <div className="skills">
            {icons.map((icon, index) => (
              <div key={index} className="skill">
                <span>
                  <img
                    src={icon.src}
                    alt={`${icon.name} icon`}
                    className={`rotate ${
                      hoveredIcon === icon.name ? "rotating" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(icon.name)}
                  />
                  <span className="text">{icon.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
