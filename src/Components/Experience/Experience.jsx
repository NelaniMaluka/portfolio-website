import "./Experience.css";
import CustomizedTimeline from "./Timeline";

export default function Experience() {
  return (
    <div id="Experience" className="xp-container">
      <div className="container">
        <div className="heading">
          <h1>Skills and Experience</h1>
        </div>
        <div className="xp-content">
          <div className="experince">
            <div className="timeline-wrapper">
              <CustomizedTimeline />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
