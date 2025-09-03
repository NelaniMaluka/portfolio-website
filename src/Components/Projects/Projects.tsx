// Projects.tsx
import React from "react";
import styles from "./Projects.module.css";

interface Project {
  name: string;
  img: string;
  tools: string[];
  about: string;
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    name: "Kick-Land",
    img: "/Images/project-images/Kick-Land/kick-land-1.png",
    tools: [
      "ReactJS",
      "Redux",
      "Spring Boot",
      "MySQL",
      "Stripe (Payments)",
      "SMTP (Emails)",
    ],
    about:
      "A full-stack e-commerce web app for buying and selling sneakers. Built with React.js (frontend) and Spring Boot (backend), it includes user authentication, shopping cart, order management, and profile management. Integrated with Stripe for secure payments and SMTP for email notifications.",
    liveUrl: "https://kick-land.web.app/",
    githubUrl: "https://github.com/NelaniMaluka/kick-land",
  },
  {
    name: "Blog-Land",
    img: "/Images/project-images/Kick-Land/kick-land-1.png",
    tools: [
      "ReactJS",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "JWT (Auth)",
      "CRUD Features",
    ],
    about:
      "A full-stack blogging platform where users can register, authenticate, create posts, and comment on community content. Features JWT authentication, CRUD operations, and a responsive, clean UI design. Deployed with a MySQL database and REST APIs.",
    liveUrl: "https://blog-land.web.app/",
    githubUrl: "https://github.com/NelaniMaluka/blog-land",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="Projects" className={styles.projectsHolder}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading2}>
          <h1>My Work</h1>
          <p>
            Discover the projects I’ve worked on, where I apply my skills in
            software development to build{" "}
            <span className={styles.e}>innovative</span> and{" "}
            <span className={styles.e}>efficient</span> solutions.
          </p>
        </div>

        {/* Projects */}
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.imgWrapper}>
                <img src={project.img} alt={project.name} />
              </div>

              <div className={styles.projectContent}>
                <h2 className={styles.e}>{project.name}</h2>

                <p>{project.about}</p>
                <ul className={styles.tools}>
                  {project.tools.map((tool, i) => (
                    <li key={i}>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.links}></div>
                <div className={styles.buttonGroup}>
                  <a
                    href={project.liveUrl}
                    className={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                    <img src="./Images/Icons/link.png" alt="link-icon" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className={styles.button2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                    <img src="./Images/Icons/redirect.png" alt="link-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
