import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CustomizedTimeline from "./Timeline";
import Education from "./Education";
import { useState } from "react";

import "./Experience.css";

export default function Experience() {
  const [isView, setView] = useState(<CustomizedTimeline />);
  const [isSelected, setSelected] = useState("experience");

  const handleExperienceClick = () => {
    setSelected("experience");
    setView(<CustomizedTimeline />);
  };

  const handleEducationClick = () => {
    setSelected("education");
    setView(<Education />);
  };

  return (
    <div id="Experience" className="xp-container">
      <div className="container">
        <div className="heading">
          <h1>Experience and Skills</h1>
        </div>
        <Stack direction="row" spacing={1}>
          <Chip
            icon={<WorkIcon />}
            label="Experience"
            variant={isSelected === "experience" ? "filled" : "outlined"}
            onClick={handleExperienceClick}
          />
          <Chip
            icon={<SchoolIcon />}
            label="More About Me"
            variant={isSelected === "education" ? "filled" : "outlined"}
            onClick={handleEducationClick}
          />
        </Stack>
        <div className="xp-content">
          <div className="experince">
            <div className="timeline-wrapper">{isView}</div>
          </div>
          <div className="skills">
            <span>
              <img src="/Images/Icons/react.png" alt="React icon" />
              React js
            </span>
            <span>
              <img src="/Images/Icons/spring-boot.png" alt="Spring Boot icon" />
              Spring Boot
            </span>
            <span>
              <img src="/Images/Icons/java.png" alt="Java icon" />
              Java
            </span>
            <span>
              <img src="/Images/Icons/jquery.png" alt="Jquery icon" />
              Jquery
            </span>
            <span>
              <img src="/Images/Icons/js.png" alt="JavaScript icon" />
              JavaScript
            </span>
            <span>
              <img src="/Images/Icons/css-3.png" alt="CSS icon" />
              CSS
            </span>

            <span>
              <img src="/Images/Icons/Git.png" alt="Git icon" />
              Git
            </span>

            <span>
              <img src="/Images/Icons/Junit.png" alt="Junit icon" />
              Junit
            </span>
            <span>
              <img src="/Images/Icons/mysql.png" alt="Mysql icon" />
              Mysql
            </span>
            <span>
              <img src="/Images/Icons/sql-server.png" alt="MS Sql icon" />
              MS Sql
            </span>
            <span>
              <img src="/Images/Icons/oracle.png" alt="Oracle DB icon" />
              Oracle DB
            </span>
            <span>
              <img src="/Images/Icons/azure.png" alt="Azure icon" />
              Azure
            </span>
            <span>
              <img src="/Images/Icons/firebase.png" alt="Firebase icon" />
              Firebase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
