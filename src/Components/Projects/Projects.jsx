import { useState } from "react";
import Certificates from "../Certificates/Certificates";

import "./Projects.css";

export default function Projects() {
  // Track hover states for each project
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      src: "/Images/Icons/internet.png",
      alt: "GitHub",
    },
    {
      src: "/Images/Icons/github.png",
      alt: "GitHub",
    },
  ];

  const projects = [
    {
      style: 1,
      name: "Kick Land",
      img: "/Images/project-images/Kick-Land/Kick-Land-img.png",
      gif: "/Images/project-images/Kick-Land/kick-land.gif",
      tools: ["ReactJS", "Redux", "Spring Boot", "MySQL", "Stripe"],
      about:
        "A full-stack web application for buying and selling sneakers, built with React.js for the frontend and Java with Spring Boot for the backend. Features include user authentication, product browsing, shopping cart and order management, profile management, and state management. Integrated with Stripe for payments and SMTP for email notifications.",
      //liveUrl: "",
      githubUrl: "https://github.com/NelaniMaluka/kick-land",
    },
    {
      style: 2,
      name: "Learnhall",
      img: "/Images/project-images/Learnhall/Learnhall-img.png",
      gif: "/Images/project-images/Learnhall/Learnhall.gif",
      tools: ["HTML", "CSS", "JavaScript", "JQuery", "Vue.js"],
      about:
        "An online platform connecting students with tutors. Collects user data, such as course preferences and tutor details, and sends it directly to the company's email for processing. Designed to streamline the connection process, ensuring a seamless and efficient experience for both students and tutors.",
      liveUrl: "https://learnhall.com/",
      githubUrl: "https://github.com/NelaniMaluka/learnhall-1",
    },
  ];

  return (
    <div id="Projects">
      <div className="container">
        {/* Projects Container Section */}
        <div className="projects-container">
          {/* Heading Section */}
          <div className="heading">
            <h1>My Work</h1>
            <p>
              Discover the projects I’ve worked on, where I apply my skills in
              software development to build{" "}
              <span className="e">innovative</span> and{" "}
              <span className="e">efficient</span> solutions.
            </p>
          </div>

          {/* Projects Section */}
          <div className="project">
            {/* Mapping through projects */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-cont"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {project.style === 1 ? (
                  <div className="project-wrapper">
                    {/* Gif Image Section */}
                    <div className="img">
                      <img
                        src={hoveredIndex === index ? project.gif : project.img}
                        alt={project.name}
                      />
                    </div>
                    {/* Project Content */}
                    <div className="project-content">
                      <h1>{project.name}</h1>
                      <div className="tools">
                        <ul>
                          {project.tools.map((tool, toolIndex) => (
                            <li key={toolIndex}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                      <p>{project.about}</p>

                      {/* Social Links (Dynamic) */}
                      <div className="socials-container">
                        <div key={index}>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="socials">
                                <div>
                                  <img
                                    src={socialLinks[0].src}
                                    alt={socialLinks[0].alt}
                                  />
                                </div>
                              </div>
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="socials">
                              <div>
                                <img
                                  src={socialLinks[1].src}
                                  alt={socialLinks[1].alt}
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="project-wrapper">
                    {/* Project Content */}
                    <div className="project-content">
                      <h1>{project.name}</h1>
                      <div className="tools">
                        <ul>
                          {project.tools.map((tool, toolIndex) => (
                            <li key={toolIndex}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                      <p>{project.about}</p>

                      {/* Social Links (Dynamic) */}
                      <div className="socials-container">
                        <div key={index}>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="socials">
                                <div>
                                  <img
                                    src={socialLinks[0].src}
                                    alt={socialLinks[0].alt}
                                  />
                                </div>
                              </div>
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="socials">
                              <div>
                                <img
                                  src={socialLinks[1].src}
                                  alt={socialLinks[1].alt}
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Gif Image Section */}
                    <div className="img">
                      <img
                        src={hoveredIndex === index ? project.gif : project.img}
                        alt={project.name}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Certificate Section */}
      <Certificates />
    </div>
  );
}
