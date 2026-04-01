import { useState } from "react";
import styles from "./Skills.module.css";

export const Skills = () => {

  const skillsData = [
  // --- Backend Development ---
  {
    name: "Java",
    src: "/Images/Icons/java.png",
    desc: "Object-oriented programming language",
  },
  {
    name: "Spring Boot",
    src: "/Images/Icons/spring-boot.png",
    desc: "Framework for building backend applications",
  },
    {
    name: "C#",
    src: "/Images/Icons/csharp.png",
    desc: "Object-oriented programming language",
  },
   {
    name: ".NET",
    src: "/Images/Icons/dotnet.png",
    desc: "Framework for building applications",
  },
  {
    name: "JUnit",
    src: "/Images/Icons/Junit.png",
    desc: "Testing framework for Java applications",
  },
  {
    name: "Hibernate",
    src: "/Images/Icons/hibernate.png",
    desc: "ORM framework for database persistence",
  },

  // --- Databases ---
  {
    name: "SQL",
    src: "/Images/Icons/sql.png",
    desc: "Relational database queries and schema design",
  },

  // --- Frontend ---
  {
    name: "React",
    src: "/Images/Icons/react.png",
    desc: "Library for building interactive user interfaces",
  },
  {
    name: "TypeScript",
    src: "/Images/Icons/typescript.png",
    desc: "Typed superset of JavaScript",
  },
  {
    name: "JavaScript",
    src: "/Images/Icons/javascript.png",
    desc: "Core language of web development",
  },
  {
    name: "HTML",
    src: "/Images/Icons/html.png",
    desc: "Markup language for structuring web pages",
  },
  {
    name: "CSS",
    src: "/Images/Icons/css.png",
    desc: "Styling and responsive layouts",
  },

  // --- Tools & DevOps ---
  {
    name: "Git",
    src: "/Images/Icons/Git.png",
    desc: "Distributed version control system",
  },
  {
    name: "Docker",
    src: "/Images/Icons/docker.png",
    desc: "Containerization platform for applications",
  },
  {
    name: "Azure",
    src: "/Images/Icons/azure.png",
    desc: "Cloud platform for deploying and managing applications",
  },
];

  return (
    <section id="Skills" className={styles.skills}>
      <div className="container">
        <div className={styles.heading}>
          <h4>Tools & Technologies</h4>
          <p>
            Discover my expertise in software development, leveraging
            modern frameworks and
            best practices to build secure,
            scalable applications.
          </p>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconsWrapper}>
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div key={index} className={styles.skill}>
                <span className={styles.imgWrapper}>
                  <img
                    src={skill.src}
                    alt={`${skill.name} icon`}
                    className={styles.icon}
                  />
                </span>
                <div className={styles.skillText}>
                  <span className={styles.text}>{skill.name}</span>
                  <span className={styles.text2}>{skill.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
