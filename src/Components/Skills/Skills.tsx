import { useState } from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const icons = [
    // --- Core Java Development ---
    {
      name: "Java",
      src: "/Images/Icons/java.png",
      desc: "Object-oriented programming language",
    },
    {
      name: "Spring Boot",
      src: "/Images/Icons/spring-boot.png",
      desc: "Backend framework for RESTful APIs",
    },
    {
      name: "JUnit",
      src: "/Images/Icons/Junit.png",
      desc: "Testing framework for Java applications",
    },

    // --- Databases & Persistence ---
    {
      name: "SQL",
      src: "/Images/Icons/sql.png",
      desc: "Relational database design and queries",
    },

    // --- Tools & Infrastructure ---
    {
      name: "Git",
      src: "/Images/Icons/Git.png",
      desc: "Version control and collaboration",
    },
    {
      name: "Docker",
      src: "/Images/Icons/docker.png",
      desc: "Containerization and deployment",
    },
    {
      name: "TypeScript",
      src: "/Images/Icons/typescript.png",
      desc: "Typed version of JavaScript",
    },

    // --- Frontend (Support Skill) ---
    {
      name: "React.js",
      src: "/Images/Icons/react.png",
      desc: "Interactive frontend library",
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
