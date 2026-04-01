import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import { useEffect, useRef, useState } from "react";

import styles from "./About.module.css";

export default function About() {
  const statsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const [counts, setCounts] = useState({
    exp: 0,
    projects: 0,
    certs: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 1500; // animation time (ms)

    const animate = (start: number, end: number, key: keyof typeof counts) => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        const value = Math.min(Math.floor((progress / duration) * end), end);

        setCounts((prev) => ({ ...prev, [key]: value }));

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animate(0, 1, "exp");
    animate(0, 7, "projects");
    animate(0, 4, "certs");
  }, [startAnimation]);

  const educationData = [
    {
      year: "2023 - 2025",
      name: "Diploma in Information Technology: Systems Development",
      institution: "CTU Training Solutions",
      description:
        "A comprehensive program focused on designing and implementing robust software solutions, specializing in cloud architecture, Azure services, and integrated security practices.",
    },
    // {
    // year: "2023 - 2025",
    // name: "National Certificate in Information Technology: Database Development",
    // institution: "CTU Training Solutions",
    // description: "A comprehensive program focused on designing and implementing robust software solutions, specializing in cloud architecture, Azure services, and integrated security practices.",
    // }
  ];

  const ServicesData = [
    {
      img: <WebIcon className={styles.icon} sx={{ fontSize: 25 }} />,
      name: "Frontend Development",
      tools: "HTML, CSS, JavaScript, React, TypeScript",
    },
    {
      img: <CodeIcon className={styles.icon} sx={{ fontSize: 25 }} />,
      name: "Backend Development",
      tools: "Java, Spring Boot, Microservices, System Design",
    },
    {
      img: <StorageIcon className={styles.icon} sx={{ fontSize: 25 }} />,
      name: "SQL Development",
      tools: "MSSQL, MySQL, Relational Databases, Query Optimization",
    },
    {
      img: <CloudIcon className={styles.icon} sx={{ fontSize: 25 }} />,
      name: "Cloud Architecture",
      tools: "Azure, Real-Time Data Processing, Cloud Security",
    },
    {
      img: <ApiIcon className={styles.icon} sx={{ fontSize: 25 }} />,
      name: "API Design",
      tools: "REST APIs, JSON, Request Validation, Pagination",
    },
    {
      img: (
        <SettingsEthernetIcon className={styles.icon} sx={{ fontSize: 25 }} />
      ),
      name: "DevOps & CI/CD",
      tools: "GitHub Actions, Build Pipelines, Automated Deployment",
    },
  ];

  return (
    <div id="About" className={styles.about}>
      <div className="container">
        <div className={styles.heading}>
          <h4>About</h4>
          <p>
            A brief overview of my education, technical skills, and the
            technologies I use to design and build modern web applications.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.column1}>
            <div className={styles.education}>
              {educationData.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <p>{edu.year}</p>
                  <h6>{edu.name}</h6>
                  <p>{edu.institution}</p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.statsBox} ref={statsRef}>
              <div className={styles.stat}>
                <h5>{counts.exp}+</h5>
                <p>Years Exp</p>
              </div>
              <div className={styles.stat}>
                <h5>{counts.projects}+</h5>
                <p>Projects</p>
              </div>
              <div className={styles.stat}>
                <h5>{counts.certs}+</h5>
                <p>Certifications</p>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            {ServicesData.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.img}>{service.img}</div>
                <h6>{service.name}</h6>
                <p>{service.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
