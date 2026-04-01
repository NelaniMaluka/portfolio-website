import * as React from "react";
import styles from "./Home.module.css";
import { socialLinks, iconMap } from "../Common/links";
import { useState, useEffect } from "react";

export default function About() {

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
    <section id="Home" className={styles.Home}>
      <div className="container">
        <div className={styles.HomeContainer}>
          <div className={styles.column1}>
            <div className={styles.openToWork}>
              <span className={styles.dot}></span>
              Open to work
            </div>

            <div className={styles.text}>
              <h4>Hello, I’m Nelani,</h4>
              <h3 className={styles.e}>Software Developer</h3>
              <p className={styles.intro}>
                I develop backend applications with Java and Spring Boot and work with SQL
                to design reliable data-driven systems. I focus on writing clean code and
                continuously improving my skills as a developer.
              </p>
            </div>
            <div className={styles.buttons}>
              <a href="#Projects">
                Projects
              </a>
              <button className={styles.downloadBtn} onClick={handleDownload}>
                Download CV
              </button>
            </div>
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
          </div>

          <div className={styles.column2}>
            <img
              src="./Images/coder.png"
              alt="Nelani Maluka"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
