// ServicesBanner.tsx
import React from "react";
import styles from "./ServicesBanner.module.css";

const services = [
  "Java Backend Development",
  "Spring Boot APIs",
  "Fullstack Web Development",
  "React Frontend Development",
  "Database Design & Management",
  "REST & GraphQL APIs",
  "Cloud Deployment (AWS / Azure)",
  "CI/CD Pipeline Setup",
  "Secure Application Development",
];

const ServicesBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {services.concat(services).map((service, idx) => (
            <span key={idx} className={styles.service}>
              <p>{service}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
