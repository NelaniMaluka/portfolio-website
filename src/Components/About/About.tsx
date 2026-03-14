import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

import styles from "./About.module.css";

export default function About() {   
    const educationData = [
        {
        year: "2023 - 2025",
        name: "Diploma in Information Technology: Systems Development",
        institution: "CTU Training Solutions",
        description: "A comprehensive program focused on designing and implementing robust software solutions, specializing in cloud architecture, Azure services, and integrated security practices.",
        }
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
  tools: "REST APIs, JSON, Request Validation, Pagination"
  },
  {
  img: <SettingsEthernetIcon className={styles.icon} sx={{ fontSize: 25 }} />,
  name: "DevOps & CI/CD",
  tools: "GitHub Actions, Build Pipelines, Automated Deployment"
  }
];
    
    return (
<div id="About" className={styles.about}>
    <div className="container"> 
        <div className={styles.heading}>
            <h4>About</h4>
            <p>
                A brief overview of my education, technical skills, and the technologies I use to
                design and build modern web applications.
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

                <div className={styles.statsBox}>
                    <div className={styles.stat}>
                        <h5>1+</h5>
                        <p>Years Exp</p>
                    </div>
                    <div className={styles.stat}>
                        <h5>7+</h5>
                        <p>Projects</p>
                    </div>
                    <div className={styles.stat}>
                        <h5>4+</h5>
                        <p>Certifications</p>
                    </div>
                </div>
            </div>
            <div className={styles.column2}> 
                {ServicesData.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.img}>
                            {service.img}
                        </div>
                        <h6>{service.name}</h6>
                        <p>{service.tools}</p>
                    </div>
                ))}</div>
        </div>
    </div>

</div>

);
}