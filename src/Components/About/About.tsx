import Experience from "./Experience";
import Education from "./Education";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { socialLinks, iconMap } from "../Common/links";

import styles from "./About.module.css";

export const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="About" className={styles.about}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading2}>
          <h1 className={styles.e}>About Me</h1>
          <p>
            A passionate <span className={styles.e}>developer</span> who loves
            building
            <span className={styles.e}>
              {" "}
              clean, creative, and impactful
            </span>{" "}
            solutions. Always learning and ready to{" "}
            <span className={styles.e}>turn ideas into reality</span>.
          </p>
        </div>

        {/* About Me */}
        <div className={styles.content}>
          <div className={styles.column1}>
            <div className={styles.profile}>
              <img src="Images/Nelani.jpg" alt="Profile image" />
              <div>
                <span>
                  <LocationOnIcon className={styles.locationIcon} />
                  Johannesburg
                </span>
              </div>
            </div>
            <p>
              I’m a recent NQF Level 6 Systems Development graduate with
              hands-on experience in full-stack development using Java, Spring
              Boot, React, Redux, and SQL. I’ve built projects like Blog Land
              and Kick Land, and I’m now looking for opportunities as a Frontend
              or Java Developer where I can tackle real challenges, contribute
              to meaningful projects, and grow as a developer.
            </p>
            <div className={styles.socialsContainer}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socials}>
                    {iconMap[link.name.toLowerCase()] || (
                      <span>{link.name}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
            <a
              href="#Projects"
              className={styles.button}
              onClick={handleDownload}
            >
              Resume
              <img
                src="/Images/Icons/download.png"
                className={styles.icon}
                alt="download-icon"
              />
            </a>
          </div>
          <div className={styles.column2}>
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};
