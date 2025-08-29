import { useState } from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  return (
    <section id="Skills" className={styles.skills}>
      <div className="container">
        <div className={styles.heading2}>
          <h1>Tools & Technologies</h1>
          <p>
            Discover my expertise in software development, leveraging{" "}
            <span className={styles.e}>modern frameworks</span> and{" "}
            <span className={styles.e}>best practices</span> to build secure,
            scalable applications.
          </p>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconsWrapper}>
            {icons.map((icon, index) => (
              <div
                key={index}
                className={styles.skill}
                onMouseEnter={() => handleMouseEnter(icon.name)}
              >
                <span className={styles.imgWrapper}>
                  <img
                    src={icon.src}
                    alt={`${icon.name} icon`}
                    className={`${styles.icon} ${styles.rotate} ${
                      hoveredIcon === icon.name ? styles.rotating : ""
                    }`}
                  />
                </span>
                <div className={styles.skillText}>
                  <span className={styles.text}>{icon.name}</span>
                  <span className={styles.text2}>{icon.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
