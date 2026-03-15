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
    name: "AI Recipe Generator",
    img: "/Images/project-images/Ai-Recipe-Gen.png",
    tools: [
      "Java",
      "Spring Boot",
      "Postges SQL",
      "REST API",
      "Real-time",
    ],
    about:
      "An AI-powered API that generates detailed recipes based on user-provided ingredients or meal preferences, providing instructions and ingredient lists dynamically.",
    liveUrl:
      "https://ai-recipe-generator-5rbk.onrender.com/swagger-ui/index.html",
    githubUrl: "https://github.com/NelaniMaluka/AI-Recipe-Generator",
  },
  {
    name: "Blog-Land",
    img: "/Images/project-images/Blog-Land.png",
    tools: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "JWT + OAuth",
      "Real-time",
    ],
    about:
      "A full-featured blogging platform where users can register, create posts, comment, and interact with content. Includes authentication, CRUD functionality, and AI-powered content moderation to ensure safe posts.",
    liveUrl: "https://blog-land.web.app/",
    githubUrl: "https://github.com/NelaniMaluka/blog-land",
  },
  {
    name: "Url-Shortener",
    img: "/Images/project-images/Url-Shortener.png",
    tools: ["Java", "Spring Boot", "Hibernate/JPA", "REST API", "JUnit"],
    about:
      "A URL shortening service that allows users to create shortened links, track access statistics, and view analytics such as most accessed URLs. Features include IP-based geo-location, request logging, and a Swagger UI for API exploration.",
    liveUrl: "https://url-shortener-4yxt.onrender.com/swagger-ui/index.html",
    githubUrl: "https://github.com/NelaniMaluka/url-shortener",
  },
  {
    name: "Manar Facility Solutions",
    img: "/Images/project-images/Manar-Facility-Solutions.png",
    tools: ["ReactJS", "TypeScript", "HTML", "CSS", "JavaScript"],
    about:
      "A professional cleaning services website that showcases Manar Facility Solutions' commercial, residential, and specialized cleaning offerings. Features service descriptions, customer testimonials, and a contact form to schedule appointments, designed to highlight trust, professionalism, and ease of client engagement.",
    liveUrl: "https://manarfacilitysolutions.com/",
    githubUrl:
      "https://github.com/moorparkdesigns/ManarFacilitySolutions.com/tree/main/ManarFacilitySolutions",
  },
  {
    name: "Learnhall",
    img: "/Images/project-images/Learnhall.png",
    tools: ["HTML", "CSS", "JavaScript"],
    about:
      "A tutoring services website that showcases Learnhall's programs, connects students with qualified tutors, and collects session inquiries via a contact form. Designed to highlight services, share tutor information, display reviews, and make it easy for parents and students to get started with tutoring.",
    liveUrl: "https://learnhall.com/",
    githubUrl: "https://github.com/NelaniMaluka/learnhall-1",
  }
];

const Projects: React.FC = () => {
  return (
    <section id="Projects" className={styles.projectsHolder}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading}>
          <h4>Featured Projects</h4>
          <p>
            Discover the projects I’ve worked on, where I apply my skills in
            software development to build innovative and efficient solutions.
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
                <ul className={styles.tools}>
                  {project.tools.map((tool, i) => (
                    <li key={i}>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
                <h2 className={styles.e}>{project.name}</h2>

                <p>{project.about}</p>

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
